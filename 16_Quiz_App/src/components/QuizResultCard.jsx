const QuizResultCard = ({result, totalQuestion}) => {
function calculateResultPercentage() {
    const percentage = (totalQuestion/100) * result * 100
    return `${+percentage.toFixed(2)}%`
}
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-slate-100 w-75 rounded-[28px] px-6 py-8 text-center shadow-xl">
        
        {/* Trophy Icon */}
        <div className="text-6xl mb-4">🏆</div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-black mb-2">
          Congrats!
        </h1>

        {/* Score */}
        <h2 className="text-5xl font-extrabold text-green-500 mb-4">
          { calculateResultPercentage() } Score
        </h2>

        {/* Description */}
        <p className="text-gray-800 font-semibold text-sm mb-3">
          Quiz completed successfully.
        </p>

        {/* Stats */}
        <p className="text-gray-700 text-sm leading-6">
          You attempt{" "}
          <span className="text-blue-500 font-bold">{totalQuestion} questions</span> and
          from that{" "}
          <span className="text-green-500 font-bold">{result} answer</span> is
          correct.
        </p>
      </div>
    </div>
  );
};

export default QuizResultCard;