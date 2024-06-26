import TableHeader from "@/components/shared/table-header";
import TablePagination from "@/components/shared/table-pagination";
import CommonTable from "@/components/shared/table";
import {
    ColumnDef,
    ColumnFiltersState,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

interface PCategoriesProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[] | undefined;
    isLoading?: boolean;
}

function ProductsDataTable<TData, TValue>({
    columns,
    data,
    isLoading,
}: PCategoriesProps<TData, TValue>) {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const table = useReactTable({
        columns,
        data: data ?? [],
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            columnFilters,
        },
    });
    return (
        <div>
            {!isLoading || data ? (
                <>
                    <div>
                        <TableHeader table={table} name="Product Name" filterKey="productName" />
                    </div>
                    <CommonTable table={table} />
                    <div className="flex items-center justify-end">
                        <TablePagination table={table} />
                    </div>
                </>
            ) : (
                // Loading Skelton Ui
                <div>Loading...</div>
            )}
        </div>
    );
}

export default ProductsDataTable;
