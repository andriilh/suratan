import { Link } from '@inertiajs/react';
import { KeyboardBackspaceRounded } from '@mui/icons-material';
import React from 'react';

export default function Pagination() {
    return (
        <div className="flex gap-2 text-sm">
            <PageButton>First</PageButton>
            <PageButton>
                <KeyboardBackspaceRounded />
            </PageButton>
            <PageButton active={true}>1</PageButton>
            <PageButton disabled={true}>2</PageButton>
            <PageButton>3</PageButton>
            <PageButton>
                <KeyboardBackspaceRounded className="rotate-180" />
            </PageButton>
            <PageButton>Last</PageButton>
        </div>
    );
}

function PageButton({ children, active = false, disabled = false }) {
    var className = '';
    if (active && !disabled) {
        className = 'bg-gray-800 text-gray-100 hover:bg-gray-700';
    } else if (!active && !disabled) {
        className = 'text-gray-800 hover:bg-gray-800 hover:text-gray-100';
    } else if (active && disabled) {
        className =
            'bg-gray-500 text-gray-100 hover:bg-gray-100 hover:text-gray-800';
    } else if (!active && disabled) {
        className = '';
    }

    return (
        <Link
            as="button"
            disabled={disabled}
            className={`inline-flex items-center rounded-lg p-1  transition-colors ${
                disabled && 'cursor-not-allowed'
            } ${className}`}
        >
            <div className="flex h-6 w-6 items-center justify-center text-center">
                {children}
            </div>
        </Link>
    );
}
