'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { 
  CIVICS_QUESTIONS, 
  CIVICS_CATEGORIES,
  CivicsQuestion, 
  CivicsCategory,
  getRandomQuestions, 
  getQuestionsByCategory,
  getOver65Questions,
  checkAnswer,
  TEST_INFO,
  CURRENT_OFFICIALS
} from '@/lib/legal/civics-test'

type TestMode = 'study' | 'practice' | 'official'
type StudyMode = 'flashcard' | 'all' | 'category'

interface TestState {
  questions: CivicsQuestion[]
  currentIndex: number
  userAnswers: string[]
  results: boolean[]
  showAnswer: boolean
  completed: boolean
}

export default function CivicsTestPage() {
  const [mode, setMode] = useState<TestMode | null>(null)
  const [studyMode, setStudyMode] = useState<StudyMode | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<CivicsCategory | null>(null)
  const [over65, setOver65] = useState(false)
  const [testState, setTestState] = useState<TestState | null>(null)
  const [inputValue, setInputValue] = useState('')
  const [showExplanation, setShowExplanation] = useState(false)

  const startTest = useCallback((questions: CivicsQuestion[]) => {
    setTestState({
      questions,
      currentIndex: 0,
      userAnswers: [],
      results: [],
      showAnswer: false,
      completed: false
    })
  }, [])

  const handleModeSelect = (selectedMode: TestMode) => {
    setMode(selectedMode)
    if (selectedMode === 'official') {
      startTest(getRandomQuestions(10, over65))
    }
  }

  const handleStudyModeSelect = (selected: StudyMode) => {
    setStudyMode(selected)
    if (selected === 'all') {
      startTest(over65 ? getOver65Questions() : CIVICS_QUESTIONS)
    } else if (selected === 'flashcard') {
      startTest(getRandomQuestions(20, over65))
    }
  }

  const handleCategorySelect = (category: CivicsCategory) => {
    setSelectedCategory(category)
    startTest(getQuestionsByCategory(category))
  }

  const handleAnswer = () => {
    if (!testState) return
    
    const currentQuestion = testState.questions[testState.currentIndex]
    const isCorrect = checkAnswer(currentQuestion, inputValue)
    
    setTestState({
      ...testState,
      userAnswers: [...testState.userAnswers, inputValue],
      results: [...testState.results, isCorrect],
      showAnswer: true
    })
    setShowExplanation(true)
  }

  const handleNext = () => {
    if (!testState) return
    
    const nextIndex = testState.currentIndex + 1
    if (nextIndex >= testState.questions.length) {
      setTestState({ ...testState, completed: true, showAnswer: false })
    } else {
      setTestState({
        ...testState,
        currentIndex: nextIndex,
        showAnswer: false
      })
      setInputValue('')
      setShowExplanation(false)
    }
  }

  const handleFlashcardReveal = () => {
    if (!testState) return
    setTestState({ ...testState, showAnswer: true })
  }

  const handleFlashcardNext = (knew: boolean) => {
    if (!testState) return
    
    const nextIndex = testState.currentIndex + 1
    if (nextIndex >= testState.questions.length) {
      setTestState({
        ...testState,
        results: [...testState.results, knew],
        completed: true,
        showAnswer: false
      })
    } else {
      setTestState({
        ...testState,
        currentIndex: nextIndex,
        results: [...testState.results, knew],
        showAnswer: false
      })
    }
  }

  const resetTest = () => {
    setMode(null)
    setStudyMode(null)
    setSelectedCategory(null)
    setTestState(null)
    setInputValue('')
    setShowExplanation(false)
  }

  const currentQuestion = testState?.questions[testState.currentIndex]

  // Calculate results
  const correctCount = testState?.results.filter(r => r).length || 0
  const totalAnswered = testState?.results.length || 0
  const passed = mode === 'official' ? correctCount >= 6 : null

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800" />
      <div className="cyber-grid absolute inset-0 opacity-10" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4">
            <span className="text-cyan-400 hover:text-cyan-300 transition-colors">← Back to Home</span>
          </Link>
          <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-magenta-400">
            Civics Test Practice
          </h1>
          <p className="text-gray-400 mt-2">Prepare for the U.S. Naturalization Civics Test</p>
        </div>

        {/* Test Info Banner */}
        {!mode && (
          <div className="glass-panel p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-400">{TEST_INFO.totalQuestions}</div>
                <div className="text-sm text-gray-400">Total Questions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-magenta-400">{TEST_INFO.questionsAsked}</div>
                <div className="text-sm text-gray-400">Asked at Interview</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">{TEST_INFO.correctToPass}</div>
                <div className="text-sm text-gray-400">Needed to Pass</div>
              </div>
            </div>
            
            {/* 65/20 Toggle */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <label className="flex items-center justify-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={over65}
                  onChange={(e) => setOver65(e.target.checked)}
                  className="w-5 h-5 rounded bg-gray-800 border-gray-600 text-cyan-500 focus:ring-cyan-500"
                />
                <span className="text-gray-300">
                  I qualify for the 65/20 exemption (age 65+ with 20 years as LPR)
                </span>
              </label>
              {over65 && (
                <p className="text-sm text-cyan-400 mt-2 text-center">
                  Using simplified 20-question test pool
                </p>
              )}
            </div>
          </div>
        )}

        {/* Mode Selection */}
        {!mode && (
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => handleModeSelect('study')}
              className="glass-panel p-8 text-left hover:border-cyan-500/50 transition-all group"
            >
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                Study Mode
              </h3>
              <p className="text-gray-400 text-sm">
                Learn all questions with explanations. Study by category or use flashcards.
              </p>
            </button>

            <button
              onClick={() => handleModeSelect('practice')}
              className="glass-panel p-8 text-left hover:border-magenta-500/50 transition-all group"
            >
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-magenta-400 transition-colors">
                Practice Test
              </h3>
              <p className="text-gray-400 text-sm">
                Answer questions and get immediate feedback. No time limit.
              </p>
            </button>

            <button
              onClick={() => handleModeSelect('official')}
              className="glass-panel p-8 text-left hover:border-yellow-500/50 transition-all group"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                Official Test Simulation
              </h3>
              <p className="text-gray-400 text-sm">
                10 random questions, just like the real interview. Pass with 6 correct.
              </p>
            </button>
          </div>
        )}

        {/* Study Mode Options */}
        {mode === 'study' && !studyMode && (
          <div className="space-y-6">
            <button onClick={resetTest} className="text-cyan-400 hover:text-cyan-300">
              ← Back to Mode Selection
            </button>
            
            <div className="grid md:grid-cols-3 gap-6">
              <button
                onClick={() => handleStudyModeSelect('flashcard')}
                className="glass-panel p-6 hover:border-cyan-500/50 transition-all"
              >
                <div className="text-3xl mb-3">🎴</div>
                <h3 className="font-bold text-white">Flashcards</h3>
                <p className="text-sm text-gray-400">Random 20 questions</p>
              </button>

              <button
                onClick={() => handleStudyModeSelect('all')}
                className="glass-panel p-6 hover:border-cyan-500/50 transition-all"
              >
                <div className="text-3xl mb-3">📖</div>
                <h3 className="font-bold text-white">All Questions</h3>
                <p className="text-sm text-gray-400">Study entire bank</p>
              </button>

              <button
                onClick={() => handleStudyModeSelect('category')}
                className="glass-panel p-6 hover:border-cyan-500/50 transition-all"
              >
                <div className="text-3xl mb-3">📂</div>
                <h3 className="font-bold text-white">By Category</h3>
                <p className="text-sm text-gray-400">Focus on specific topics</p>
              </button>
            </div>
          </div>
        )}

        {/* Category Selection */}
        {mode === 'study' && studyMode === 'category' && !selectedCategory && (
          <div className="space-y-6">
            <button onClick={() => setStudyMode(null)} className="text-cyan-400 hover:text-cyan-300">
              ← Back to Study Options
            </button>
            
            <div className="grid gap-4">
              {CIVICS_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className="glass-panel p-4 text-left hover:border-cyan-500/50 transition-all flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-bold text-white">{cat.name}</h3>
                    <p className="text-sm text-gray-400">{cat.description}</p>
                  </div>
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                    {cat.questionCount} questions
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Active Test/Study Session */}
        {testState && !testState.completed && currentQuestion && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <button onClick={resetTest} className="text-cyan-400 hover:text-cyan-300">
                ← Exit
              </button>
              <div className="text-gray-400">
                Question {testState.currentIndex + 1} of {testState.questions.length}
                {mode === 'official' && (
                  <span className="ml-4 text-green-400">
                    {correctCount} / {TEST_INFO.correctToPass} to pass
                  </span>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-magenta-500 transition-all duration-500"
                style={{ width: `${((testState.currentIndex + 1) / testState.questions.length) * 100}%` }}
              />
            </div>

            {/* Question Card */}
            <div className="glass-panel p-8">
              <div className="flex items-start gap-4 mb-6">
                <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                  #{currentQuestion.id}
                </span>
                {currentQuestion.isOver65 && (
                  <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                    65/20 Test
                  </span>
                )}
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">
                {currentQuestion.question}
              </h2>

              {/* Flashcard Mode */}
              {studyMode === 'flashcard' && (
                <>
                  {!testState.showAnswer ? (
                    <button
                      onClick={handleFlashcardReveal}
                      className="w-full py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold rounded-lg
                                 hover:from-cyan-500 hover:to-cyan-400 transition-all"
                    >
                      Reveal Answer
                    </button>
                  ) : (
                    <div className="space-y-6">
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <h4 className="font-semibold text-green-400 mb-2">Acceptable Answers:</h4>
                        <ul className="space-y-1">
                          {currentQuestion.answers.map((ans, i) => (
                            <li key={i} className="text-white">• {ans}</li>
                          ))}
                        </ul>
                      </div>

                      {currentQuestion.explanation && (
                        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                          <p className="text-gray-300">{currentQuestion.explanation}</p>
                        </div>
                      )}

                      {currentQuestion.mnemonic && (
                        <div className="bg-magenta-500/10 border border-magenta-500/30 rounded-lg p-4">
                          <p className="text-sm text-magenta-400">
                            <strong>Memory Tip:</strong> {currentQuestion.mnemonic}
                          </p>
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-4">
                        <button
                          onClick={() => handleFlashcardNext(false)}
                          className="py-3 bg-red-500/20 text-red-400 font-semibold rounded-lg hover:bg-red-500/30 transition-all"
                        >
                          Need to Review
                        </button>
                        <button
                          onClick={() => handleFlashcardNext(true)}
                          className="py-3 bg-green-500/20 text-green-400 font-semibold rounded-lg hover:bg-green-500/30 transition-all"
                        >
                          Got It ✓
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Practice/Official Test Mode */}
              {(mode === 'practice' || mode === 'official') && (
                <>
                  {!testState.showAnswer ? (
                    <div className="space-y-4">
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && inputValue && handleAnswer()}
                        placeholder="Type your answer..."
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white
                                   focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                        autoFocus
                      />
                      <button
                        onClick={handleAnswer}
                        disabled={!inputValue}
                        className="w-full py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold rounded-lg
                                   hover:from-cyan-500 hover:to-cyan-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Submit Answer
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {/* Result */}
                      <div className={`p-4 rounded-lg ${
                        testState.results[testState.results.length - 1]
                          ? 'bg-green-500/10 border border-green-500/30'
                          : 'bg-red-500/10 border border-red-500/30'
                      }`}>
                        <div className="flex items-center gap-3 mb-2">
                          {testState.results[testState.results.length - 1] ? (
                            <>
                              <span className="text-2xl">✓</span>
                              <span className="font-bold text-green-400">Correct!</span>
                            </>
                          ) : (
                            <>
                              <span className="text-2xl">✗</span>
                              <span className="font-bold text-red-400">Not quite</span>
                            </>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm">
                          Your answer: <span className="text-white">{testState.userAnswers[testState.userAnswers.length - 1]}</span>
                        </p>
                      </div>

                      {/* Correct Answers */}
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <h4 className="font-semibold text-cyan-400 mb-2">Acceptable Answers:</h4>
                        <ul className="space-y-1">
                          {currentQuestion.answers.map((ans, i) => (
                            <li key={i} className="text-white">• {ans}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Explanation */}
                      {showExplanation && currentQuestion.explanation && (
                        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                          <p className="text-gray-300">{currentQuestion.explanation}</p>
                        </div>
                      )}

                      <button
                        onClick={handleNext}
                        className="w-full py-3 bg-gradient-to-r from-magenta-600 to-magenta-500 text-white font-bold rounded-lg
                                   hover:from-magenta-500 hover:to-magenta-400 transition-all"
                      >
                        {testState.currentIndex + 1 >= testState.questions.length ? 'See Results' : 'Next Question →'}
                      </button>
                    </div>
                  )}
                </>
              )}

              {/* Study Mode (All/Category) */}
              {studyMode && studyMode !== 'flashcard' && mode === 'study' && (
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="font-semibold text-cyan-400 mb-2">Acceptable Answers:</h4>
                    <ul className="space-y-1">
                      {currentQuestion.answers.map((ans, i) => (
                        <li key={i} className="text-white">• {ans}</li>
                      ))}
                    </ul>
                  </div>

                  {currentQuestion.explanation && (
                    <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                      <p className="text-gray-300">{currentQuestion.explanation}</p>
                    </div>
                  )}

                  {currentQuestion.mnemonic && (
                    <div className="bg-magenta-500/10 border border-magenta-500/30 rounded-lg p-4">
                      <p className="text-sm text-magenta-400">
                        <strong>Memory Tip:</strong> {currentQuestion.mnemonic}
                      </p>
                    </div>
                  )}

                  {currentQuestion.updateNote && (
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                      <p className="text-sm text-yellow-400">
                        <strong>Note:</strong> {currentQuestion.updateNote}
                      </p>
                    </div>
                  )}

                  <button
                    onClick={handleNext}
                    className="w-full py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold rounded-lg
                               hover:from-cyan-500 hover:to-cyan-400 transition-all"
                  >
                    {testState.currentIndex + 1 >= testState.questions.length ? 'Finish' : 'Next Question →'}
                  </button>
                </div>
              )}

              {/* Legal Citation */}
              <div className="mt-6 pt-4 border-t border-gray-700 text-xs text-gray-500">
                Category: {CIVICS_CATEGORIES.find(c => c.id === currentQuestion.category)?.name}
              </div>
            </div>
          </div>
        )}

        {/* Results Screen */}
        {testState?.completed && (
          <div className="space-y-8">
            <div className="glass-panel p-8 text-center">
              {mode === 'official' && (
                <div className={`inline-block p-6 rounded-full mb-6 ${
                  passed ? 'bg-green-500/20' : 'bg-red-500/20'
                }`}>
                  <span className="text-6xl">{passed ? '🎉' : '📚'}</span>
                </div>
              )}
              
              <h2 className="text-3xl font-bold text-white mb-4">
                {mode === 'official' 
                  ? (passed ? 'Congratulations! You Passed!' : 'Keep Studying!')
                  : 'Session Complete!'}
              </h2>

              <div className="flex justify-center gap-8 mb-6">
                <div>
                  <div className="text-4xl font-bold text-cyan-400">{correctCount}</div>
                  <div className="text-sm text-gray-400">Correct</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-400">{totalAnswered - correctCount}</div>
                  <div className="text-sm text-gray-400">Incorrect</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-magenta-400">
                    {Math.round((correctCount / totalAnswered) * 100)}%
                  </div>
                  <div className="text-sm text-gray-400">Score</div>
                </div>
              </div>

              {mode === 'official' && !passed && (
                <p className="text-gray-400 mb-6">
                  You needed {TEST_INFO.correctToPass} correct answers to pass. 
                  Don't worry - keep practicing and you'll get there!
                </p>
              )}

              <div className="flex justify-center gap-4">
                <button
                  onClick={resetTest}
                  className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all"
                >
                  Return to Menu
                </button>
                {mode === 'official' && (
                  <button
                    onClick={() => startTest(getRandomQuestions(10, over65))}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-semibold rounded-lg
                               hover:from-cyan-500 hover:to-cyan-400 transition-all"
                  >
                    Try Again
                  </button>
                )}
              </div>
            </div>

            {/* Answer Review */}
            {(mode === 'practice' || mode === 'official') && (
              <div className="glass-panel p-6">
                <h3 className="text-xl font-bold text-white mb-4">Answer Review</h3>
                <div className="space-y-3">
                  {testState.questions.map((q, i) => (
                    <div key={i} className={`p-4 rounded-lg ${
                      testState.results[i] ? 'bg-green-500/10' : 'bg-red-500/10'
                    }`}>
                      <div className="flex items-start gap-3">
                        <span className={`text-xl ${testState.results[i] ? 'text-green-400' : 'text-red-400'}`}>
                          {testState.results[i] ? '✓' : '✗'}
                        </span>
                        <div className="flex-1">
                          <p className="font-semibold text-white mb-1">{q.question}</p>
                          <p className="text-sm text-gray-400">
                            Your answer: <span className="text-gray-300">{testState.userAnswers[i]}</span>
                          </p>
                          {!testState.results[i] && (
                            <p className="text-sm text-cyan-400 mt-1">
                              Correct: {q.answers[0]}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Current Officials Reference */}
        {!mode && (
          <div className="mt-8 glass-panel p-6">
            <h3 className="text-lg font-bold text-white mb-4">Current Officials (Study These!)</h3>
            <p className="text-sm text-gray-500 mb-4">Last updated: {CURRENT_OFFICIALS.lastUpdated}</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 p-3 rounded">
                <span className="text-gray-400 text-sm">President:</span>
                <span className="text-white ml-2">{CURRENT_OFFICIALS.president}</span>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <span className="text-gray-400 text-sm">Vice President:</span>
                <span className="text-white ml-2">{CURRENT_OFFICIALS.vicePresident}</span>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <span className="text-gray-400 text-sm">Speaker of the House:</span>
                <span className="text-white ml-2">{CURRENT_OFFICIALS.speakerOfHouse}</span>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <span className="text-gray-400 text-sm">Chief Justice:</span>
                <span className="text-white ml-2">{CURRENT_OFFICIALS.chiefJustice}</span>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-4">
              You must also know your state's U.S. Senators, U.S. Representative, Governor, and state capital.
            </p>
          </div>
        )}

        {/* Legal Footer */}
        <div className="mt-8 text-center text-xs text-gray-600">
          <p>Source: USCIS Official 128 Civics Questions</p>
          <p className="mt-1">Legal basis: 8 U.S.C. § 1423 (INA § 312) | 8 CFR Part 312</p>
        </div>
      </div>
    </main>
  )
}
