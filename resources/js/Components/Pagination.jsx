import { Link } from '@inertiajs/react';
import { KeyboardBackspaceRounded } from '@mui/icons-material';
import React from 'react';

export default function Pagination({ meta, links, search }) {
    return (
        <div className="flex gap-2 text-sm">
            <PageButton
                href={meta.links[1].url}
                disabled={meta.links[1].active}
            >
                First
            </PageButton>
            {meta.links.map(({ active, label, url }, index) => {
                const isFirst = index == 0 ? true : false;
                const isLast = index == meta.links.length - 1 ? true : false;
                // const href = url + (search ? `?search=${search}` : '');
                if (isFirst) {
                    return (
                        <PageButton
                            href={url}
                            disabled={meta.current_page == 1}
                            key="prev"
                        >
                            <KeyboardBackspaceRounded />
                        </PageButton>
                    );
                }
                if (isLast) {
                    return (
                        <PageButton
                            href={url}
                            disabled={meta.current_page == meta.last_page}
                            key="next"
                        >
                            <KeyboardBackspaceRounded className="rotate-180" />
                        </PageButton>
                    );
                }

                return (
                    <PageButton href={url} active={active} key={label}>
                        {label}
                    </PageButton>
                );
            })}
            <PageButton
                href={meta.links[meta.last_page].url}
                disabled={meta.links[meta.last_page].active}
            >
                Last
            </PageButton>
        </div>
    );
}

function PageButton({ children, active = false, disabled = false, href = '' }) {
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
            as="a"
            disabled={disabled}
            className={`inline-flex items-center rounded-lg p-1  transition-colors ${
                disabled && 'cursor-not-allowed'
            } ${className}`}
            href={href && href}
        >
            <div className="flex h-6 w-6 items-center justify-center text-center">
                {children}
            </div>
        </Link>
    );
}
