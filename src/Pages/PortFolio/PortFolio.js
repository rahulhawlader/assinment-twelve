import React from 'react';

const PortFolio = () => {




    return (
        <div>

            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold"><span className='text-green-500'>I am Web Developer</span>
                            <br /> <span className='text-yellow-400'>Md Rahul Hawlader Sajib</span>

                        </h1>
                        <p class="py-6">Hey I am Front end Developer New <span className='text-blue-600'>Developer Build</span> I love structure and order and i also stand for quality. i love spending time on fixing little deteils and  optimizing code link . also i like working in a team you'll learn faster and much more as the saying goes two heads are better then one</p>
                        <button class="btn btn-primary">HERE ME</button>



                    </div>
                </div>
            </div>


            <div className='grid sm:grid-cols-1 lg:grid-cols-2 mx-8 my-24'>


                <div class="card w-96 bg-base-100 shadow-xl my-14">
                    <div class="card-body bg-black">
                        <h2 class="card-title">Md Sajib Hawlader Rahul</h2>
                        <p>Front End Developer</p>
                        <p>Email: hawladerrahul@gmail.com</p>
                        <p>Phone: 01726132222</p>

                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body bg-black text-white bg-purple-400">
                        <h2 class="card-title">Educations</h2>
                        <p className='text-bold'>SSC 2010</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div class="divider">OR</div>
                        <p className='text-bold'>HSC 2012</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>



                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl my-12">
                    <div class="card-body bg-black">
                        <h2 class="card-title">HTML</h2>
                        <progress class="progress progress-success w-56" value="95" max="100"></progress>
                        <p>CSS</p>
                        <progress class="progress progress-success w-56" value="90" max="100"></progress>
                        <p>Bootstrap</p>
                        <progress class="progress progress-success w-56" value="80" max="100"></progress>
                        <p>Javascript</p>
                        <progress class="progress progress-success w-56" value="80" max="100"></progress>
                        <p>React</p>
                        <progress class="progress progress-success w-56" value="70" max="100"></progress>
                        <p>MongoDB</p>
                        <progress class="progress progress-success w-56" value="70" max="100"></progress>

                    </div>
                </div>


                <div class="card w-96 bg-base-100 shadow-xl my-14">
                    <div class="card-body bg-black">
                        <h2 class="card-title">My Three Project</h2>
                        <h1>Project 01,</h1>
                        <p>Live: https://merry-hotteok-fce819.netlify.app/reviews</p>
                        <p>code: https://github.com/programming-hero-web-course-4/product-analysis-website-rahulhawlader</p>

                        <h1>Project : 2,</h1>
                        <p>LivE: https://assignment-ten-bf51b.web.app/</p>
                        <p>Code: https://github.com/programming-hero-web-course-4/independent-service-provider-rahulhawlader</p>
                        <h1>Project : 3,</h1>
                        <p>LivE: https://assignment-elevenn.web.app/</p>
                        <p>Code: https://github.com/programming-hero-web-course-4/independent-service-provider-rahulhawlader</p>
                        https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-rahulhawlader

                    </div>
                </div>
            </div>

        </div>
    );
};

export default PortFolio;