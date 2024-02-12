import { useState, useEffect, useRef, useReducer } from 'react';
import { debounce } from '@/lib';

//Constants
const SCROLL_THRESHOLD = 450;
const DEBOUNCE_DELAY = 200;
const DOWN_THRESHOLD = 3;
const UP_THRESHOLD = 1;


//Reducer model
const actionTypes = {
    SHOW_NAV: 'SHOW_NAV',
    CLOSE_NAV: 'CLOSE_NAV',
};

const initialState = { showNav: true, closeNav: false };

const navbarReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SHOW_NAV:
            return { showNav: true, closeNav: false };
        case actionTypes.CLOSE_NAV:
            return { showNav: false, closeNav: true };
        default:
            return state;
    }
};

export const useScrollHandler = () => {
    const [navbarState, dispatchNavbarAction] = useReducer(
        navbarReducer,
        initialState,
    );
    const { current: heap } = useRef({
        prevScroll: 0,
        toUp: 0,
        toDown: 0,
    });
    const [navFixed, setNavFixed] = useState(false);

    const isBelowScrollThreshold = (scrollPosition) =>
        scrollPosition < SCROLL_THRESHOLD;

    const shouldCloseNav = () => heap.toDown > DOWN_THRESHOLD;
    const shouldShowNav = () => heap.toUp > UP_THRESHOLD;

    const updateNavState = () => {
        const currentScroll = window.pageYOffset;

        if (isBelowScrollThreshold(currentScroll)) {
            heap.prevScroll = currentScroll;
            dispatchNavbarAction({ type: actionTypes.SHOW_NAV });
            return;
        }
        setNavFixed(true);
        if (currentScroll < SCROLL_THRESHOLD + 500) {
            heap.toUp = 0;
            heap.toDown = 0
            dispatchNavbarAction({ type: actionTypes.SHOW_NAV });
        } else if (currentScroll > heap.prevScroll) {
            heap.toUp = 0;
            heap.toDown += 1;
            if (shouldCloseNav()) {
                dispatchNavbarAction({ type: actionTypes.CLOSE_NAV });
            }
        } else if (currentScroll < heap.prevScroll) {
            heap.toUp += 1;
            heap.toDown = 0;
            if (shouldShowNav()) {
                dispatchNavbarAction({ type: actionTypes.SHOW_NAV });
            }
        }
        heap.prevScroll = currentScroll;
    };

    const scrollFixed = () => {
        const currentScroll = window.pageYOffset;

        if (isBelowScrollThreshold(currentScroll)) {
            setNavFixed(false)
            heap.toUp = 0;
            heap.toDown = 0;
        }
    };

    const debouncedUpdateScrollStatus = debounce(updateNavState, DEBOUNCE_DELAY);

    useEffect(() => {
        const handleScroll = () => {
            scrollFixed();
            debouncedUpdateScrollStatus();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { navFixed, navbarState };
};