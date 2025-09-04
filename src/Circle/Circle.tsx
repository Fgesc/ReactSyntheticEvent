import './Circle.css';
import clsx from 'clsx';
import { forwardRef } from 'react';

interface Props {
  color: string;
  active: boolean;
  tabIndex?: number;
  onClick: () => void;
}

export const Circle = forwardRef<HTMLDivElement, Props>(
    ({ color, active, tabIndex, onClick }, ref) => {

        const handleKeyDown = (e: React.KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); 
                onClick();
            }
        };

        return (
            <div
                ref={ref}
                className={clsx('circle', `circle-${color}`, {'circle--active': active,})}
                tabIndex={tabIndex}
                onClick={onClick}
                onKeyDown={handleKeyDown}
            />
        );
    }
);

Circle.displayName = 'Circle';
