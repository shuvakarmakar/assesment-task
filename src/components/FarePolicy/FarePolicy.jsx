const FarePolicy = () => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-5 mt-10">
            <div>
                <h2 className="bg-green-200 ml-3 w-2/5 p-3">Cancellation</h2>
                <p>Refund Amount = Paid Amount - Airline Cancellation Fee</p>
            </div>
            <div>
                <h2 className="bg-green-200 ml-3 w-2/5 p-3">Void</h2>
                <p>Re-issue Fee = Airlines Fee + Fare Difference</p>
            </div>
            <div>
                <h2 className="bg-green-200 ml-3 w-2/5 p-3">Re-issue</h2>
                <p>Re-issue Fee = Airlines Fee + Fare Difference</p>
            </div>
            <div>
                <h2 className="bg-green-200 ml-3 w-2/5 p-3">Refund</h2>
                <p>Re-issue Fee = Airlines Fee + Fare Difference</p>
            </div>
        </div>
        </div>
    );
};

export default FarePolicy;