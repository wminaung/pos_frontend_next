"use client";

import * as React from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface DatePickerWithRangeProps {
    dateRange: { from: Date; to: Date };
    setDateRange: (dRange: { from: Date; to: Date }) => void;
}

export function DatePickerWithRange({
    className,
    dateRange,
    setDateRange,
}: React.HTMLAttributes<HTMLDivElement> & DatePickerWithRangeProps) {
    return (
        <div className={cn("grid grid-cols-2 gap-6", className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <div className="flex items-center gap-2">
                        <label htmlFor="start-date" className="text-sm">
                            Start Date:
                        </label>
                        <Button
                            id="start-date"
                            variant={"outline"}
                            className={cn(
                                "w-[150px] justify-start text-left font-normal",
                                !dateRange && "text-muted-foreground",
                            )}
                        >
                            {dateRange?.from ? (
                                format(dateRange.from, "LLL dd, y")
                            ) : (
                                <span>Pick a date</span>
                            )}
                        </Button>
                    </div>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        key="start"
                        mode="single"
                        selected={dateRange.from}
                        onSelect={(value) => {
                            setDateRange({ ...dateRange, from: value as Date });
                        }}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
            <Popover>
                <PopoverTrigger asChild>
                    <div className="flex items-center gap-2">
                        <label htmlFor="endDate" className="text-sm">
                            End Date:
                        </label>
                        <Button
                            id="endDate"
                            variant={"outline"}
                            className={cn(
                                "w-[150px] justify-start text-left font-normal",
                                !dateRange && "text-muted-foreground",
                            )}
                        >
                            {dateRange?.to ? (
                                format(dateRange.to, "LLL dd, y")
                            ) : (
                                <span>Pick a date</span>
                            )}
                        </Button>
                    </div>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        key="end"
                        mode="single"
                        selected={dateRange.to}
                        onSelect={(value) => {
                            setDateRange({ ...dateRange, to: value as Date });
                        }}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
