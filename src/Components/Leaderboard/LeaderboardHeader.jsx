import SortFilter from './LeaderboardFilter';

export default function LeaderboardHeader() {
    return (
        <div className="flex items-center mt-4 px-6 relative mb-4">
            <div className="flex-1" />

            {/* Title */}
            <div className="bg-amber-300 rounded-md flex-shrink-0">
                <p className="font-bold text-stone-50 text-3xl px-6 py-3 text-center">
                    Leaderboard
                </p>
            </div>

            {/* Sorting Filter */}
            <div className="flex-1 flex justify-end items-center gap-2">
                <SortFilter />
            </div>
        </div>
    );
}


