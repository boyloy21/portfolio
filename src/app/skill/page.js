import Rangskill from "@/components/Rangskill";
export default function Skill() {
    return (
        <div className="p-8 bg-stone-700 text-gray-200">
            {/* Title */}
            <h1 className="text-5xl font-bold text-center mb-8 text-blue-600">My Skills</h1>
            <hr className="border-2 border-x-neutral-500 mt-2 mr-4"></hr>
            {/* Programming Languages */}
            <div className="mb-8 w-full mt-4">
                <h2 className="text-4xl font-bold  text-green-600 mb-4">Programming Languages</h2>
                <Rangskill range="50" skill="C/C++"/>
                <Rangskill range="75" skill="Python"/>
                <Rangskill range="60" skill="JavaScript"/>
                <Rangskill range="70" skill="HTML/CSS"/>
            </div>
            <hr className="border-2 border-x-neutral-500 mt-2 mr-4"></hr>
            {/* Frameworks */}
            <div className="mb-8 mt-4">
                <h2 className="text-4xl font-bold  text-green-600 mb-4">Frameworks</h2>
                <Rangskill range="65" skill="React"/>
                <Rangskill range="50" skill="Next.js"/>
                <Rangskill range="45" skill="Boostrap"/>
                <Rangskill range="70" skill="Tailwind CSS"/>
            </div>
            <hr className="border-2 border-x-neutral-500 mt-2 mr-4"></hr>
            {/* Databases */}
            <div className="mb-8 mt-4">
                <h2 className="text-4xl font-bold  text-green-600 mb-4">Databases</h2>
                <Rangskill range="80" skill="MongoDB"/>
                <Rangskill range="36" skill="MySQL"/>
            </div>
            <hr className="border-2 border-x-neutral-500 mt-2 mr-4"></hr>
            {/* Microcontrollers */}
            <div className="mb-8 mt-4">
                <h2 className="text-4xl font-bold  text-green-600 mb-4">Microcontrollers</h2>
                <Rangskill range="50" skill="Arduino"/>
                <Rangskill range="75" skill="STM32"/>
                <Rangskill range="40" skill="ESP32"/>
                <Rangskill range="20" skill="PLC"/>
                <Rangskill range="15" skill="Raspberry Pi"/>
            </div>
            <hr className="border-2 border-x-neutral-500 mt-2 mr-4"></hr>
            {/* Operating Systems */}
            <div className="mb-8 mt-4">
                <h2 className="text-4xl font-bold  text-green-600 mb-4">Operating Systems</h2>
                <Rangskill range="70" skill="ROS2"/>
                <Rangskill range="50" skill="Linux"/>
                <Rangskill range="30" skill="Window"/>
            </div>
            <hr className="border-2 border-x-neutral-500 mt-2 mr-4"></hr>
            {/* Control Systems */}
            <div className="mb-8 mt-4">
                <h2 className="text-4xl font-bold  text-green-600 mb-4">Control Systems</h2>
                <ul className="list-disc list-inside ml-4 space-y-2">
                    {/* Controller Section */}
                    <li>
                        <span className="font-bold text-3xl  text-gray-300">Controller</span>
                        <Rangskill range="85" skill="PID Controller" />
                        <Rangskill range="60" skill="LQR Controller" />
                        <Rangskill range="74" skill="MPC Controller" />
                    </li>
                    {/* Filter and Estimate Section */}
                    <li>
                        <span className="font-bold text-3xl text-gray-300">Filter and Estimate</span>
                        <Rangskill range="85" skill="Extended Kalman Filter" />
                        <Rangskill range="60" skill="Partical Filter" />
                        <Rangskill range="74" skill="Least Square Estimate" />
                        
                    </li>
                    {/* Modeling Section */}
                    <li>
                        <span className="font-bold text-3xl text-gray-300">Modeling</span>
                        <Rangskill range="80" skill="DC Motor" />
                        <Rangskill range="90" skill="Differential Wheel" />
                        <Rangskill range="90" skill="Mecanum Wheel" />
                        <Rangskill range="90" skill="Omni Wheel" />
                    </li>
                </ul>
            </div>
            <hr className="border-2 border-x-neutral-500 mt-2 mr-4"></hr>
            {/* Communication  */}
            <div className="mb-8 mt-4">
                <h2 className="text-4xl font-bold text-green-600 mb-4">Communication Protocol and Serial Communication</h2>
                <Rangskill range="80" skill="UART" />
                <Rangskill range="50" skill="I2C" />
                <Rangskill range="45" skill="SPI" />
                <Rangskill range="80" skill="CAN-BUS" />
                <Rangskill range="75" skill="Micro-Ros" />
            </div>
            <hr className="border-2 border-x-neutral-500 mt-2 mr-4"></hr>
            {/* Machine Learning  */}
            <div className="mb-8 mt-4">
                <h2 className="text-4xl font-bold text-green-600 mb-4">Machine Learning</h2>
                <Rangskill range="80" skill="Linera Regression" />
                <Rangskill range="80" skill="Polynomial Regression" />
                <Rangskill range="50" skill="KNN(K-Nearest Neighbor)" />
            </div>
            <hr className="border-2 border-x-neutral-500 mt-2 mr-4"></hr>
            {/* Deep Learning  */}
            <div className="mb-8 mt-4">
                <h2 className="text-4xl font-bold text-green-600 mb-4">Deep Learning</h2>
                <Rangskill range="60" skill="Neural Network" />
                {/* <Rangskill range="80" skill="Polynomial Regression" />
                <Rangskill range="50" skill="KNN(K-Nearest Neighbor)" /> */}
            </div>
        </div>
    );
}
