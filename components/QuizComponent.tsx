'use client';

import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'How should you prepare a greasy pizza box before discarding it?',
    options: [
      'Recycle the entire box in the dry paper bin',
      'Tear off and recycle clean cardboard portions; compost or trash the grease-soaked base',
      'Wash the cardboard with soap and water before recycling',
      'Burn the greasy cardboard at home'
    ],
    correctIndex: 1,
    explanation: 'Food oils and grease contaminate paper recycling pulpers. The clean cardboard lid can be recycled, while grease-stained parts belong in compost or general waste.',
    category: 'Cardboard & Paper'
  },
  {
    id: 2,
    question: 'Where should depleted lithium and alkaline batteries be disposed of?',
    options: [
      'In the regular plastic/dry recycling bin',
      'In the general household trash bag',
      'At dedicated e-waste/hazardous battery drop-off centers with taped terminals',
      'Buried in soil for natural decomposition'
    ],
    correctIndex: 2,
    explanation: 'Batteries contain hazardous heavy metals and reactive chemicals that can cause fires in trash compactors or leach toxins into groundwater.',
    category: 'Hazardous Waste'
  },
  {
    id: 3,
    question: 'Which of the "5R" principles has the highest environmental priority in the circular economy?',
    options: [
      'Recycle',
      'Refuse',
      'Repair',
      'Reuse'
    ],
    correctIndex: 1,
    explanation: 'Refusing unnecessary single-use items avoids waste creation entirely before any manufacturing or recycling energy is spent.',
    category: '5R Principles'
  },
  {
    id: 4,
    question: 'Why must plastic caps and liquids be emptied before recycling PET plastic bottles?',
    options: [
      'Trapped liquids add dead weight and ruin baling machinery; contamination reduces recycled plastic quality',
      'Bottles explode if recycled with liquid',
      'Water melts recycling blades',
      'It is not necessary, liquids can remain inside'
    ],
    correctIndex: 0,
    explanation: 'Emptying liquids prevents contamination and enables clean mechanical crushing and shredding into high-purity PET flakes.',
    category: 'Plastics'
  }
];

export function QuizComponent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const q = QUIZ_QUESTIONS[currentQuestion];

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === q.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
      if (score >= 3) {
        try {
          confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
        } catch (e) {}
      }
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-base">Sustainability Knowledge Check</h4>
            <p className="text-xs text-slate-500">Test your waste segregation understanding</p>
          </div>
        </div>
        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
        </span>
      </div>

      {!quizFinished ? (
        <div className="space-y-6">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              Category: {q.category}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
              {q.question}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {q.options.map((option, index) => {
              const isSelected = selectedOption === index;
              const isCorrect = index === q.correctIndex;
              let btnStyle = 'border-slate-200 bg-slate-50/50 hover:bg-slate-100 text-slate-700';

              if (isAnswered) {
                if (isCorrect) {
                  btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold ring-1 ring-emerald-500';
                } else if (isSelected) {
                  btnStyle = 'border-red-400 bg-red-50 text-red-900';
                } else {
                  btnStyle = 'border-slate-200 opacity-50 text-slate-400';
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                >
                  <span>{option}</span>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-600 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation banner */}
          {isAnswered && (
            <div className={`p-4 rounded-2xl text-xs space-y-1 animate-fadeIn ${
              selectedOption === q.correctIndex 
                ? 'bg-emerald-50 border border-emerald-200 text-emerald-900' 
                : 'bg-amber-50 border border-amber-200 text-amber-900'
            }`}>
              <span className="font-bold block">
                {selectedOption === q.correctIndex ? 'Correct! 🎉' : 'Incorrect.'}
              </span>
              <p className="leading-relaxed">{q.explanation}</p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all"
              >
                {currentQuestion < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'View Results'}
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Quiz Finished Screen */
        <div className="text-center py-6 space-y-4 animate-fadeIn">
          <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Quiz Completed!</h3>
            <p className="text-sm text-slate-600 mt-1">
              You scored <span className="font-bold text-emerald-700">{score} out of {QUIZ_QUESTIONS.length}</span>
            </p>
          </div>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            {score === 4
              ? 'Outstanding! You have master-level awareness of circular waste segregation.'
              : score >= 2
              ? 'Great job! Review the 5R and material guidelines above to sharpen your habits.'
              : 'Keep learning! Check the guides above to avoid common segregation traps.'}
          </p>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-sm transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Quiz</span>
          </button>
        </div>
      )}
    </div>
  );
}
