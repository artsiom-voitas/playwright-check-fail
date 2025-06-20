"use client"

import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Checkbox } from '@nextui-org/react';

export default function Home() {
    let checkboxCount: number[] = [];
        for (let i = 0; i <= 1000; i++) {
            checkboxCount.push(i)
        }

    return (
        <main className="mt-4">
            <ThemeSwitcher />
            <div className="flex flex-col items-center justify-center text-4xl font-bold">
                Next.js 15 playground.
            </div>
            <div className="flex flex-col">
                {checkboxCount.map((count) => <Checkbox key={count}>{count}</Checkbox>)}
            </div>
        </main>
    );
}
