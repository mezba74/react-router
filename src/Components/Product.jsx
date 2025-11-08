import React from "react";

const Product = () => {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100">
            <div className="max-w-5xl mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold mb-6 text-center">Product</h1>
                <p className="text-slate-300 text-center mb-10 text-sm"></p>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                        <img
                            src="https://marketplace.canva.com/8-1Kc/MAGoQJ8-1Kc/1/tl/canva-ginger-cat-with-paws-raised-in-air-MAGoQJ8-1Kc.jpg"
                            alt="card image 1"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="font-semibold mb-2 text-lg">Card Title 1</h2>
                            <p className="text-sm text-slate-300 mb-3"></p>
                            <button className="px-4 py-2 text-xs rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-colors">
                                Read More
                            </button>
                        </div>
                    </div>

                    <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                        <img
                            src="https://marketplace.canva.com/8-1Kc/MAGoQJ8-1Kc/1/tl/canva-ginger-cat-with-paws-raised-in-air-MAGoQJ8-1Kc.jpg"
                            alt="card image 2"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="font-semibold mb-2 text-lg">Card Title 2</h2>
                            <p className="text-sm text-slate-300 mb-3"></p>
                            <button className="px-4 py-2 text-xs rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-colors">
                                Read More
                            </button>
                        </div>
                    </div>

                    <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                        <img
                            src="https://marketplace.canva.com/8-1Kc/MAGoQJ8-1Kc/1/tl/canva-ginger-cat-with-paws-raised-in-air-MAGoQJ8-1Kc.jpg"
                            alt="card image 3"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="font-semibold mb-2 text-lg">Card Title 3</h2>
                            <p className="text-sm text-slate-300 mb-3"></p>
                            <button className="px-4 py-2 text-xs rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-colors">
                                Read More
                            </button>
                        </div>
                    </div>

                    <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                        <img
                            src="https://marketplace.canva.com/8-1Kc/MAGoQJ8-1Kc/1/tl/canva-ginger-cat-with-paws-raised-in-air-MAGoQJ8-1Kc.jpg"
                            alt="card image 4"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="font-semibold mb-2 text-lg">Card Title 4</h2>
                            <p className="text-sm text-slate-300 mb-3"></p>
                            <button className="px-4 py-2 text-xs rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-colors">
                                Read More
                            </button>
                        </div>
                    </div>

                    <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                        <img
                            src="https://marketplace.canva.com/8-1Kc/MAGoQJ8-1Kc/1/tl/canva-ginger-cat-with-paws-raised-in-air-MAGoQJ8-1Kc.jpg"
                            alt="card image 5"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="font-semibold mb-2 text-lg">Card Title 5</h2>
                            <p className="text-sm text-slate-300 mb-3"></p>
                            <button className="px-4 py-2 text-xs rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-colors">
                                Read More
                            </button>
                        </div>
                    </div>

                    <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                        <img
                            src="https://marketplace.canva.com/8-1Kc/MAGoQJ8-1Kc/1/tl/canva-ginger-cat-with-paws-raised-in-air-MAGoQJ8-1Kc.jpg"
                            alt="card image 6"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="font-semibold mb-2 text-lg">Card Title 6</h2>
                            <p className="text-sm text-slate-300 mb-3"></p>
                            <button className="px-4 py-2 text-xs rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-colors">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
