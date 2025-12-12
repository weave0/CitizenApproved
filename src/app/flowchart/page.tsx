'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'

// ═══════════════════════════════════════════════════════════════════════════════
// FLOWCHART DATA TYPES
// ═══════════════════════════════════════════════════════════════════════════════

interface FlowNode {
  id: string
  type: 'start' | 'decision' | 'process' | 'outcome' | 'bar' | 'requirement'
  label: string
  description?: string
  x: number
  y: number
  width: number
  height: number
  color: string
  legalCitation?: string
}

interface FlowEdge {
  id: string
  from: string
  to: string
  label?: string
  type: 'yes' | 'no' | 'default' | 'conditional'
}

interface PathwayFlowchart {
  id: string
  name: string
  description: string
  nodes: FlowNode[]
  edges: FlowEdge[]
}

// ═══════════════════════════════════════════════════════════════════════════════
// FLOWCHART DEFINITIONS
// ═══════════════════════════════════════════════════════════════════════════════

const MAIN_FLOWCHART: PathwayFlowchart = {
  id: 'main',
  name: 'U.S. Citizenship Pathways Overview',
  description: 'All major pathways to U.S. citizenship at a glance',
  nodes: [
    { id: 'start', type: 'start', label: 'Are you a U.S. Citizen?', x: 400, y: 50, width: 200, height: 60, color: '#06B6D4' },
    
    // Main branches
    { id: 'born_us', type: 'decision', label: 'Born in the U.S.?', x: 150, y: 150, width: 180, height: 60, color: '#8B5CF6' },
    { id: 'born_abroad', type: 'decision', label: 'Born abroad to U.S. citizen parent?', x: 400, y: 150, width: 200, height: 60, color: '#8B5CF6' },
    { id: 'naturalization', type: 'decision', label: 'Permanent Resident (Green Card)?', x: 700, y: 150, width: 200, height: 60, color: '#8B5CF6' },
    
    // Jus Soli branch
    { id: 'jus_soli_yes', type: 'outcome', label: '✓ Citizen at Birth\n(Jus Soli)', x: 50, y: 280, width: 160, height: 70, color: '#10B981', legalCitation: '14th Amendment' },
    { id: 'embassy_child', type: 'decision', label: 'Child of diplomat?', x: 250, y: 280, width: 160, height: 60, color: '#F59E0B' },
    { id: 'diplomat_exception', type: 'bar', label: '✗ Not Citizen\n(Diplomatic Exception)', x: 250, y: 380, width: 160, height: 70, color: '#EF4444' },
    
    // Jus Sanguinis branch
    { id: 'jus_sanguinis_check', type: 'decision', label: 'Parent met physical presence?', x: 400, y: 280, width: 200, height: 60, color: '#F59E0B' },
    { id: 'jus_sanguinis_yes', type: 'outcome', label: '✓ Citizen at Birth\n(Jus Sanguinis)', x: 400, y: 400, width: 180, height: 70, color: '#10B981', legalCitation: 'INA § 301' },
    { id: 'not_citizen_abroad', type: 'process', label: 'May seek other pathways', x: 600, y: 280, width: 160, height: 60, color: '#6B7280' },
    
    // Naturalization branch
    { id: 'lpr_status', type: 'decision', label: 'How long as LPR?', x: 700, y: 280, width: 180, height: 60, color: '#8B5CF6' },
    { id: 'spouse_track', type: 'process', label: 'Spouse of Citizen?\n3-Year Track', x: 550, y: 380, width: 160, height: 70, color: '#EC4899' },
    { id: 'standard_track', type: 'process', label: 'Standard Track\n5-Year Residence', x: 750, y: 380, width: 160, height: 70, color: '#06B6D4' },
    { id: 'military_track', type: 'process', label: 'Military Service\nSpecial Rules', x: 920, y: 380, width: 160, height: 70, color: '#F59E0B' },
    
    // Requirements
    { id: 'meet_requirements', type: 'requirement', label: 'Meet Requirements:\n• Physical Presence\n• Good Moral Character\n• English/Civics', x: 700, y: 500, width: 200, height: 90, color: '#8B5CF6' },
    
    // Final outcomes
    { id: 'naturalized', type: 'outcome', label: '✓ Naturalized\nU.S. Citizen', x: 700, y: 630, width: 180, height: 70, color: '#10B981' },
    
    // Derivative
    { id: 'derivative', type: 'decision', label: 'Under 18 with citizen parent?', x: 920, y: 150, width: 180, height: 60, color: '#8B5CF6' },
    { id: 'derivative_yes', type: 'outcome', label: '✓ Automatic Citizenship\n(CCA)', x: 920, y: 280, width: 180, height: 70, color: '#10B981', legalCitation: 'INA § 320' },
  ],
  edges: [
    // From start
    { id: 'e1', from: 'start', to: 'born_us', label: 'Birth?', type: 'default' },
    { id: 'e2', from: 'start', to: 'born_abroad', type: 'default' },
    { id: 'e3', from: 'start', to: 'naturalization', label: 'Naturalize?', type: 'default' },
    { id: 'e4', from: 'start', to: 'derivative', type: 'default' },
    
    // Jus Soli
    { id: 'e5', from: 'born_us', to: 'jus_soli_yes', label: 'Yes', type: 'yes' },
    { id: 'e6', from: 'born_us', to: 'embassy_child', label: 'Check', type: 'conditional' },
    { id: 'e7', from: 'embassy_child', to: 'diplomat_exception', label: 'Yes', type: 'yes' },
    { id: 'e8', from: 'embassy_child', to: 'jus_soli_yes', label: 'No', type: 'no' },
    
    // Jus Sanguinis
    { id: 'e9', from: 'born_abroad', to: 'jus_sanguinis_check', label: 'Yes', type: 'yes' },
    { id: 'e10', from: 'born_abroad', to: 'not_citizen_abroad', label: 'No', type: 'no' },
    { id: 'e11', from: 'jus_sanguinis_check', to: 'jus_sanguinis_yes', label: 'Yes', type: 'yes' },
    { id: 'e12', from: 'jus_sanguinis_check', to: 'not_citizen_abroad', label: 'No', type: 'no' },
    
    // Naturalization
    { id: 'e13', from: 'naturalization', to: 'lpr_status', label: 'Yes', type: 'yes' },
    { id: 'e14', from: 'lpr_status', to: 'spouse_track', label: '3+ yrs', type: 'conditional' },
    { id: 'e15', from: 'lpr_status', to: 'standard_track', label: '5+ yrs', type: 'conditional' },
    { id: 'e16', from: 'lpr_status', to: 'military_track', label: 'Military', type: 'conditional' },
    { id: 'e17', from: 'spouse_track', to: 'meet_requirements', type: 'default' },
    { id: 'e18', from: 'standard_track', to: 'meet_requirements', type: 'default' },
    { id: 'e19', from: 'military_track', to: 'meet_requirements', type: 'default' },
    { id: 'e20', from: 'meet_requirements', to: 'naturalized', label: 'Pass', type: 'yes' },
    
    // Derivative
    { id: 'e21', from: 'derivative', to: 'derivative_yes', label: 'Yes', type: 'yes' },
  ]
}

const NATURALIZATION_FLOWCHART: PathwayFlowchart = {
  id: 'naturalization',
  name: 'Naturalization Process',
  description: 'Step-by-step naturalization pathway',
  nodes: [
    { id: 'start', type: 'start', label: 'Begin Naturalization', x: 400, y: 30, width: 180, height: 50, color: '#06B6D4' },
    
    // Eligibility checks
    { id: 'lpr_check', type: 'decision', label: 'Are you a Permanent Resident?', x: 400, y: 110, width: 220, height: 60, color: '#8B5CF6' },
    { id: 'not_lpr', type: 'bar', label: 'Must obtain LPR status first', x: 150, y: 110, width: 180, height: 50, color: '#EF4444' },
    
    { id: 'track_select', type: 'decision', label: 'Which track applies?', x: 400, y: 200, width: 200, height: 60, color: '#8B5CF6' },
    
    // Tracks
    { id: 'spouse_3yr', type: 'process', label: 'Spouse of USC\n3 Years as LPR', x: 150, y: 290, width: 160, height: 60, color: '#EC4899' },
    { id: 'standard_5yr', type: 'process', label: 'Standard\n5 Years as LPR', x: 400, y: 290, width: 160, height: 60, color: '#06B6D4' },
    { id: 'military', type: 'process', label: 'Military Service\nSpecial Rules', x: 650, y: 290, width: 160, height: 60, color: '#F59E0B' },
    
    // Requirements
    { id: 'residence', type: 'requirement', label: 'Continuous Residence\nNo trips > 6 months', x: 200, y: 390, width: 200, height: 60, color: '#8B5CF6' },
    { id: 'physical', type: 'requirement', label: 'Physical Presence\n30 months (or 18 for spouse)', x: 450, y: 390, width: 220, height: 60, color: '#8B5CF6' },
    { id: 'gmc', type: 'requirement', label: 'Good Moral Character\nNo bars apply', x: 700, y: 390, width: 180, height: 60, color: '#8B5CF6' },
    
    // GMC Bars
    { id: 'gmc_check', type: 'decision', label: 'Any GMC bars?', x: 450, y: 490, width: 180, height: 60, color: '#F59E0B' },
    { id: 'permanent_bar', type: 'bar', label: 'Permanent Bar\n(Murder, Aggravated Felony)', x: 200, y: 580, width: 200, height: 60, color: '#EF4444' },
    { id: 'conditional_bar', type: 'bar', label: 'Conditional Bar\nWait for period to expire', x: 450, y: 580, width: 200, height: 60, color: '#F59E0B' },
    
    // Application
    { id: 'file_n400', type: 'process', label: 'File Form N-400\n$710 fee', x: 700, y: 490, width: 160, height: 60, color: '#06B6D4' },
    { id: 'biometrics', type: 'process', label: 'Biometrics\nFingerprints', x: 700, y: 580, width: 160, height: 50, color: '#8B5CF6' },
    { id: 'interview', type: 'process', label: 'USCIS Interview\nEnglish + Civics Test', x: 700, y: 660, width: 180, height: 60, color: '#8B5CF6' },
    
    // Decision
    { id: 'decision', type: 'decision', label: 'Interview Result?', x: 500, y: 660, width: 160, height: 60, color: '#F59E0B' },
    { id: 'denied', type: 'bar', label: 'Denied\nMay appeal or reapply', x: 300, y: 660, width: 160, height: 60, color: '#EF4444' },
    
    // Oath
    { id: 'oath', type: 'process', label: 'Oath Ceremony\nTake Oath of Allegiance', x: 500, y: 760, width: 200, height: 60, color: '#10B981' },
    { id: 'citizen', type: 'outcome', label: '🎉 U.S. CITIZEN', x: 500, y: 860, width: 180, height: 70, color: '#10B981' },
  ],
  edges: [
    { id: 'e1', from: 'start', to: 'lpr_check', type: 'default' },
    { id: 'e2', from: 'lpr_check', to: 'not_lpr', label: 'No', type: 'no' },
    { id: 'e3', from: 'lpr_check', to: 'track_select', label: 'Yes', type: 'yes' },
    { id: 'e4', from: 'track_select', to: 'spouse_3yr', label: 'Spouse', type: 'conditional' },
    { id: 'e5', from: 'track_select', to: 'standard_5yr', label: 'Standard', type: 'conditional' },
    { id: 'e6', from: 'track_select', to: 'military', label: 'Military', type: 'conditional' },
    { id: 'e7', from: 'spouse_3yr', to: 'residence', type: 'default' },
    { id: 'e8', from: 'standard_5yr', to: 'residence', type: 'default' },
    { id: 'e9', from: 'military', to: 'gmc', type: 'default' },
    { id: 'e10', from: 'residence', to: 'physical', type: 'default' },
    { id: 'e11', from: 'physical', to: 'gmc', type: 'default' },
    { id: 'e12', from: 'gmc', to: 'gmc_check', type: 'default' },
    { id: 'e13', from: 'gmc_check', to: 'permanent_bar', label: 'Permanent', type: 'conditional' },
    { id: 'e14', from: 'gmc_check', to: 'conditional_bar', label: 'Conditional', type: 'conditional' },
    { id: 'e15', from: 'gmc_check', to: 'file_n400', label: 'None', type: 'yes' },
    { id: 'e16', from: 'file_n400', to: 'biometrics', type: 'default' },
    { id: 'e17', from: 'biometrics', to: 'interview', type: 'default' },
    { id: 'e18', from: 'interview', to: 'decision', type: 'default' },
    { id: 'e19', from: 'decision', to: 'denied', label: 'Fail', type: 'no' },
    { id: 'e20', from: 'decision', to: 'oath', label: 'Pass', type: 'yes' },
    { id: 'e21', from: 'oath', to: 'citizen', type: 'default' },
  ]
}

const FLOWCHARTS: PathwayFlowchart[] = [MAIN_FLOWCHART, NATURALIZATION_FLOWCHART]

// ═══════════════════════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default function FlowchartPage() {
  const [selectedChart, setSelectedChart] = useState<string>('main')
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [scale, setScale] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })

  const chart = useMemo(() => 
    FLOWCHARTS.find(c => c.id === selectedChart) || MAIN_FLOWCHART,
    [selectedChart]
  )

  const handleZoomIn = useCallback(() => setScale(s => Math.min(s + 0.1, 2)), [])
  const handleZoomOut = useCallback(() => setScale(s => Math.max(s - 0.1, 0.5)), [])
  const handleReset = useCallback(() => { setScale(1); setPan({ x: 0, y: 0 }) }, [])

  // Calculate SVG viewBox
  const viewBox = useMemo(() => {
    const padding = 50
    const minX = Math.min(...chart.nodes.map(n => n.x)) - padding
    const minY = Math.min(...chart.nodes.map(n => n.y)) - padding
    const maxX = Math.max(...chart.nodes.map(n => n.x + n.width)) + padding
    const maxY = Math.max(...chart.nodes.map(n => n.y + n.height)) + padding
    return { minX, minY, width: maxX - minX, height: maxY - minY }
  }, [chart])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="cyber-grid opacity-10" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-cyan-900/30 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl">🗺️</span>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-green-500 text-transparent bg-clip-text">
              Pathway Flowchart
            </span>
          </Link>
          <div className="flex gap-4">
            <Link href="/eligibility" className="px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              Eligibility
            </Link>
            <Link href="/processing" className="px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              Processing Times
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-cyan-400">Interactive</span>{' '}
            <span className="text-white">Pathway Flowchart</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Visual decision trees for all U.S. citizenship pathways. 
            Hover over nodes for details.
          </p>
        </div>

        {/* Controls */}
        <div className="glass-panel p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2">
            {FLOWCHARTS.map(fc => (
              <button
                key={fc.id}
                onClick={() => setSelectedChart(fc.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  selectedChart === fc.id
                    ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {fc.name}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <button onClick={handleZoomOut} className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg text-xl">−</button>
            <span className="text-gray-400 w-16 text-center">{Math.round(scale * 100)}%</span>
            <button onClick={handleZoomIn} className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg text-xl">+</button>
            <button onClick={handleReset} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm">Reset</button>
          </div>
        </div>

        {/* Chart Description */}
        <div className="glass-panel p-4 mb-6">
          <h2 className="text-xl font-bold text-white mb-2">{chart.name}</h2>
          <p className="text-gray-400">{chart.description}</p>
        </div>

        {/* Legend */}
        <div className="glass-panel p-4 mb-6">
          <h3 className="text-sm font-semibold text-gray-400 mb-3">LEGEND</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-cyan-500" />
              <span className="text-sm text-gray-300">Start/Process</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-purple-500" />
              <span className="text-sm text-gray-300">Decision</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-500" />
              <span className="text-sm text-gray-300">Positive Outcome</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-red-500" />
              <span className="text-sm text-gray-300">Bar/Block</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-yellow-500" />
              <span className="text-sm text-gray-300">Warning/Check</span>
            </div>
          </div>
        </div>

        {/* SVG Flowchart */}
        <div className="glass-panel p-4 overflow-hidden">
          <div 
            className="overflow-auto"
            style={{ maxHeight: '70vh' }}
          >
            <svg
              viewBox={`${viewBox.minX - pan.x / scale} ${viewBox.minY - pan.y / scale} ${viewBox.width / scale} ${viewBox.height / scale}`}
              className="w-full"
              style={{ minHeight: '500px', minWidth: '800px' }}
            >
              {/* Defs for markers */}
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" />
                </marker>
                <marker
                  id="arrowhead-yes"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="#10B981" />
                </marker>
                <marker
                  id="arrowhead-no"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="#EF4444" />
                </marker>
              </defs>

              {/* Edges */}
              {chart.edges.map(edge => {
                const fromNode = chart.nodes.find(n => n.id === edge.from)
                const toNode = chart.nodes.find(n => n.id === edge.to)
                if (!fromNode || !toNode) return null

                const fromX = fromNode.x + fromNode.width / 2
                const fromY = fromNode.y + fromNode.height
                const toX = toNode.x + toNode.width / 2
                const toY = toNode.y

                // Simple path calculation
                const midY = (fromY + toY) / 2
                const path = `M ${fromX} ${fromY} C ${fromX} ${midY}, ${toX} ${midY}, ${toX} ${toY}`

                const strokeColor = edge.type === 'yes' ? '#10B981' : 
                                   edge.type === 'no' ? '#EF4444' : '#6B7280'
                const markerId = edge.type === 'yes' ? 'arrowhead-yes' : 
                                edge.type === 'no' ? 'arrowhead-no' : 'arrowhead'

                return (
                  <g key={edge.id}>
                    <path
                      d={path}
                      fill="none"
                      stroke={strokeColor}
                      strokeWidth="2"
                      markerEnd={`url(#${markerId})`}
                      opacity={0.7}
                    />
                    {edge.label && (
                      <text
                        x={(fromX + toX) / 2}
                        y={midY}
                        fill={strokeColor}
                        fontSize="11"
                        textAnchor="middle"
                        className="font-semibold"
                      >
                        {edge.label}
                      </text>
                    )}
                  </g>
                )
              })}

              {/* Nodes */}
              {chart.nodes.map(node => {
                const isHovered = hoveredNode === node.id
                
                return (
                  <g
                    key={node.id}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className="cursor-pointer"
                  >
                    {/* Shadow/glow when hovered */}
                    {isHovered && (
                      <rect
                        x={node.x - 4}
                        y={node.y - 4}
                        width={node.width + 8}
                        height={node.height + 8}
                        rx={node.type === 'decision' ? 0 : 8}
                        fill="none"
                        stroke={node.color}
                        strokeWidth="2"
                        opacity={0.5}
                        className="animate-pulse"
                      />
                    )}
                    
                    {/* Node shape */}
                    {node.type === 'decision' ? (
                      // Diamond for decisions
                      <polygon
                        points={`${node.x + node.width/2},${node.y} ${node.x + node.width},${node.y + node.height/2} ${node.x + node.width/2},${node.y + node.height} ${node.x},${node.y + node.height/2}`}
                        fill={isHovered ? node.color : `${node.color}CC`}
                        stroke={node.color}
                        strokeWidth="2"
                      />
                    ) : (
                      // Rectangle for others
                      <rect
                        x={node.x}
                        y={node.y}
                        width={node.width}
                        height={node.height}
                        rx={node.type === 'outcome' || node.type === 'bar' ? 12 : 6}
                        fill={isHovered ? node.color : `${node.color}CC`}
                        stroke={node.color}
                        strokeWidth="2"
                      />
                    )}
                    
                    {/* Label */}
                    <text
                      x={node.x + node.width / 2}
                      y={node.y + node.height / 2}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize={node.label.length > 30 ? 10 : 12}
                      fontWeight="600"
                      className="pointer-events-none"
                    >
                      {node.label.split('\n').map((line, i, arr) => (
                        <tspan
                          key={i}
                          x={node.x + node.width / 2}
                          dy={i === 0 ? `${-0.6 * (arr.length - 1)}em` : '1.2em'}
                        >
                          {line}
                        </tspan>
                      ))}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>
        </div>

        {/* Hovered Node Details */}
        {hoveredNode && (
          <div className="glass-panel p-4 mt-4">
            {(() => {
              const node = chart.nodes.find(n => n.id === hoveredNode)
              if (!node) return null
              return (
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{node.label.replace('\n', ' ')}</h3>
                  {node.description && <p className="text-gray-400 mb-2">{node.description}</p>}
                  {node.legalCitation && (
                    <p className="text-cyan-400 text-sm">
                      <strong>Legal Basis:</strong> {node.legalCitation}
                    </p>
                  )}
                  <p className="text-gray-500 text-xs mt-2">
                    Type: <span className="capitalize">{node.type}</span>
                  </p>
                </div>
              )
            })()}
          </div>
        )}

        {/* Instructions */}
        <div className="glass-panel p-4 mt-6 text-center text-gray-500 text-sm">
          <p>💡 Hover over nodes to see details • Use zoom controls to adjust view • Scroll to pan</p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 glass-panel p-6 bg-gray-900/50 border border-gray-800">
          <p className="text-gray-500 text-sm">
            <strong className="text-gray-400">Disclaimer:</strong> This flowchart is a simplified visual 
            representation for educational purposes. Actual citizenship eligibility involves many nuances 
            and exceptions not shown here. Consult USCIS resources and/or an immigration attorney for 
            specific guidance.
          </p>
        </div>
      </main>
    </div>
  )
}
