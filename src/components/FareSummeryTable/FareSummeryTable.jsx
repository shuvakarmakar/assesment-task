const FareSummeryTable = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-green-400">
                            <th>Pax Type</th>
                            <th>Base Fare (BDT)</th>
                            <th>Tax (BDT)</th>
                            <th>Total (BDT)</th>
                            <th>Pax Count</th>
                            <th>Service Fee (BDT)</th>
                            <th>Sub Total (BDT)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-green-200">
                            <td className="text-center">Adult x1</td>
                            <td className="text-center">4090 TK</td>
                            <td className="text-center">275 TK</td>
                            <td className="text-center">4815 TK</td>
                            <td className="text-center">1</td>
                            <td className="text-center">0 BDT</td>
                            <td className="text-center">4815 TK</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td className="text-center">Child x1</td>
                            <td className="text-center">4090 TK</td>
                            <td className="text-center">275 TK</td>
                            <td className="text-center">4815 TK</td>
                            <td className="text-center">1</td>
                            <td className="text-center">0 BDT</td>
                            <td className="text-center">4815 TK</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td className="text-center">Infant x1</td>
                            <td className="text-center">4090 TK</td>
                            <td className="text-center">275 TK</td>
                            <td className="text-center">4815 TK</td>
                            <td className="text-center">1</td>
                            <td className="text-center">0 BDT</td>
                            <td className="text-center">4815 TK</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FareSummeryTable;
