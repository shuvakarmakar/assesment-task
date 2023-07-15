const Baggage = () => {
    return (
        <div className="sm:h-[300px] md:h-[300px] lg:h-[300px] bg-slate-100">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-green-400">
                            <th>Baggage</th>
                            <th>Check In</th>
                            <th>Cabin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-green-200">
                            <td className="text-center">Adult</td>
                            <td className="text-center">20 KG</td>
                            <td className="text-center">M</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td className="text-center">Child</td>
                            <td className="text-center">20 KG</td>
                            <td className="text-center">M</td>
                        </tr>
                        {/* row 3 */}
                        <tr className="bg-green-200">
                            <td className="text-center">Infant</td>
                            <td className="text-center">20 KG</td>
                            <td className="text-center">M</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Baggage;