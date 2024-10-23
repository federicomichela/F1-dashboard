import React from 'react';
import { Link } from 'react-router-dom';

export function TopNav() {
    return (
        <div className="container flex items-start justify-between p-4 w-full">
            {/* Logo Section */}
            <Link to="/">
                <img
                    src="/images/f1_logo.png"
                    alt="Home"
                    width={100}
                    height={100}
                    className="mr-2"
                />
            </Link>
        </div>
    )
}