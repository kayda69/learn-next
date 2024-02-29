import { fontABeeze } from "../ui/fonts"
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';

import { fetchRevenue } from '@/app/lib/data';
export default async function Page(){
    
    return(
        <main>
            <h1 className={`${fontABeeze.className} mb-4 text-lg md:text-2xl`}>Thống kê</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"></div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 bg-yellow-600 lg:grid-cols-8">
                  {/* <RevenueChart revenue={revenue}  /> */}
            </div>
        </main>
    )
}