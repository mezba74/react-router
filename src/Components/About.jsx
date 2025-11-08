import React from 'react';

const About = () => {
    return (
        <div>
            <div className="min-h-screen bg-slate-900 text-slate-100">
                <div className="max-w-4xl mx-auto px-4 py-10">
                    <h1 className="text-3xl font-bold mb-4 text-center">About Me</h1>
                    <p className="text-slate-300 text-center mb-10 text-sm">
                        I am Mezba, a CST student and a front-end focused MERN stack learner.
                    </p>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="bg-slate-800 rounded-xl border border-slate-700 p-5">
                            <h2 className="text-xl font-semibold mb-2">Basic Info</h2>
                            <p className="text-sm text-slate-300 mb-1">Name: Mezba</p>
                            <p className="text-sm text-slate-300 mb-1">
                                Department: CST (Computer Science &amp; Technology)
                            </p>
                            <p className="text-sm text-slate-300">
                                Institute: Barguna Polytechnic Institute
                            </p>
                        </div>

                        <div className="bg-slate-800 rounded-xl border border-slate-700 p-5">
                            <h2 className="text-xl font-semibold mb-2">Current Status</h2>
                            <p className="text-sm text-slate-300 mb-1">Internship at: Bd Calling</p>
                            <p className="text-sm text-slate-300">
                                Learning MERN stack with a focus on front-end development.
                            </p>
                        </div>

                        <div className="bg-slate-800 rounded-xl border border-slate-700 p-5">
                            <h2 className="text-xl font-semibold mb-2">Skills</h2>
                            <ul className="text-sm text-slate-300 space-y-1">
                                <li>• HTML</li>
                                <li>• CSS</li>
                                <li>• JavaScript</li>
                                <li>• React.js</li>
                            </ul>
                        </div>

                        <div className="bg-slate-800 rounded-xl border border-slate-700 p-5">
                            <h2 className="text-xl font-semibold mb-2">Goals</h2>
                            <p className="text-sm text-slate-300 mb-2">
                                I want to build my career as a full MERN stack developer, especially with strong front-end skills.
                            </p>
                            <p className="text-sm text-slate-300">
                                I am improving myself through practice, real-life projects, and internships.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;