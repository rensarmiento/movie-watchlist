'use client'
import { createContext, useContext, useState } from 'react';
import { imdbID, imdbList } from './lib/definitions';


// Define a type for the context state
interface WatchlistContextType {
    list: imdbID[];  // An array of movie IDs (strings)
    setWatchList: React.Dispatch<React.SetStateAction<imdbList>>; // Function to update the watchlist
}

// Create context with an initial empty value
const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

// Hook to use the WatchlistContext
export function useWatchlistContext() {
    const context = useContext(WatchlistContext);
    if (!context) {
        throw new Error('useWatchlistContext must be used within a WatchlistProvider');
    }
    return context;
}

// WatchlistProvider component that wraps the children
export const WatchlistProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [watchlist, setWatchList] = useState<imdbList>([]);  // Initialize as an array of movie IDs
    
    return (
        <WatchlistContext.Provider value={{ list: watchlist, setWatchList }}>
            {children}
        </WatchlistContext.Provider>
    );
};