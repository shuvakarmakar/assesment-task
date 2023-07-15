const FareSummeryTable = () => {
    return (
        <div className="sm:h-[300px] md:h-[300px] lg:h-[300px] bg-slate-100">
            <table className="table divide-y divide-gray-200">
                {/* head */}
                <thead>
                    <tr className="bg-green-400">
                        <th className="py-2 sm:py-4">Pax Type</th>
                        <th className="py-2 sm:py-4">Base Fare (BDT)</th>
                        <th className="py-2 sm:py-4">Tax (BDT)</th>
                        <th className="py-2 sm:py-4">Total (BDT)</th>
                        <th className="py-2 sm:py-4">Pax Count</th>
                        <th className="py-2 sm:py-4">Service Fee (BDT)</th>
                        <th className="py-2 sm:py-4">Sub Total (BDT)</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr className="bg-green-200">
                        <td className="py-2 sm:py-4 text-center">Adult x1</td>
                        <td className="py-2 sm:py-4 text-center">4090 TK</td>
                        <td className="py-2 sm:py-4 text-center">275 TK</td>
                        <td className="py-2 sm:py-4 text-center">4815 TK</td>
                        <td className="py-2 sm:py-4 text-center">1</td>
                        <td className="py-2 sm:py-4 text-center">0 BDT</td>
                        <td className="py-2 sm:py-4 text-center">4815 TK</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <td className="py-2 sm:py-4 text-center">Child x1</td>
                        <td className="py-2 sm:py-4 text-center">4090 TK</td>
                        <td className="py-2 sm:py-4 text-center">275 TK</td>
                        <td className="py-2 sm:py-4 text-center">4815 TK</td>
                        <td className="py-2 sm:py-4 text-center">1</td>
                        <td className="py-2 sm:py-4 text-center">0 BDT</td>
                        <td className="py-2 sm:py-4 text-center">4815 TK</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="bg-green-200">
                        <td className="py-2 sm:py-4 text-center">Infant x1</td>
                        <td className="py-2 sm:py-4 text-center">4090 TK</td>
                        <td className="py-2 sm:py-4 text-center">275 TK</td>
                        <td className="py-2 sm:py-4 text-center">4815 TK</td>
                        <td className="py-2 sm:py-4 text-center">1</td>
                        <td className="py-2 sm:py-4 text-center">0 BDT</td>
                        <td className="py-2 sm:py-4 text-center">4815 TK</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default FareSummeryTable;
