import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    return (
        <div className="text-white h-full bg-stone-700">
            {/* Projects Section */}
            <div className="ml-8">
            <h1 className="text-5xl font-bold text-center mt-0 text-blue-600 py-6">My Projects</h1>
            <hr className="border-2 border-green-600 mt-2 mr-4"></hr>
            <div className="py-8">
                <h1 className="text-4xl text-green-600 font-bold">First Project : Cube 8x8 LED (student Project Year3)</h1>
                <h1 className="text-3xl py-4">I focus on Program and Support Prepare cube led and circuit</h1>
                <ul className="list-disc list-inside ml-6 space-y-2 py-4 text-2xl">
                    <li>Time : (01/2023 - 04/2023) and start again from (11/2022 - 01/2023)</li>
                    <li>My Team : 5 member( Vuth Vongsetha(Design Circuit), Yorn virak(Design Circuit), Yun Yisean(Write Report), Yoeum Da(Write Report and Reseach circuit), Yem Savorn(Support Prepare))</li>
                    <li>Flow of Process : NRF24L01(transmit(vx,vy,omegaz)) &rarr; Inverse kinematics &rarr; Speed Motor(V1,V2,V3,V4) &rarr; PI on DC Motor &rarr;  </li>
                    <li>Flow to Design : Start design mechanic on Fusion 360 &rarr; Find knowledge about circuit on driver motor(BTS7960) and Power Supply &rarr; Program on STM32 board use(STM32F103C8T6)</li>
                </ul>
                <div className="flex flex-row pb-4  pt-12">
                    <Image src="/images/cube1.jpg" alt="project1" width={350} height={200} className="shadow-xl shadow-green-700 mx-10 transform hover:scale-125 translate-transform duration-75 ease-linear"/>
                    <Image src="/images/cub2.jpg" alt="project1" width={350} height={200} className="shadow-xl shadow-green-700 mx-10 transform hover:scale-125 translate-transform duration-75 ease-linear"/>
                    {/* <Image src="/images/project1-3.jpg" alt="project1" width={350} height={200} className="shadow-xl shadow-green-700 mx-10 transform hover:scale-125 translate-transform duration-75 ease-linear"/> */}
                    <video controls autoPlay muted loop src="/videos/cube1.mp4" width={400} height={200} className="shadow-xl shadow-green-700 mx-10 transform hover:scale-125 translate-transform duration-75 ease-linear"/>
                    <video controls muted loop src="/videos/Cube4.MOV" width={400} height={200} className="shadow-xl shadow-green-700 mx-10 transform hover:scale-125 translate-transform duration-75 ease-linear"/>
                </div>
            </div>
            <hr className="border-2 border-green-600 mt-2 mr-4"></hr>
            <div className="py-8">
                <h1 className="text-4xl text-green-600 font-bold">Second Project : Manual Mobile robot mecanum</h1>
                <h1 className="text-3xl py-4">I work on Mechanical Robot Mecanum Wheel , Study Circuit Driver Motor and Program (to control PI on DC Motor and Blutooth HC-05 and again use NRF24L01 to remote control)</h1>
                <ul className="list-disc list-inside ml-6 space-y-2 py-4 text-2xl">
                    <li>Time : (01/2023 - 04/2023) and start again from (11/2023 - 12/2023)</li>
                    <li>Team: (Me, Viphu, Keng Sakada) </li>
                    <li>Flow of Process : NRF24L01(transmit(vx,vy,omegaz)) &rarr; Inverse kinematics &rarr; Speed Motor(V1,V2,V3,V4) &rarr; PI on DC Motor &rarr;  </li>
                    <li>Flow to Design : Start design mechanic on Fusion 360 &rarr; Find knowledge about circuit on driver motor(BTS7960) and Power Supply &rarr; Program on STM32 board use(STM32F103C8T6)</li>
                </ul>
                <div className="flex flex-row pb-4  pt-12">
                    <Image src="/images/projec1-1.jpg" alt="project1" width={350} height={200} className="shadow-xl shadow-green-700 mx-10 transform hover:scale-125 translate-transform duration-75 ease-linear"/>
                    <Image src="/images/project1-2.jpg" alt="project1" width={350} height={200} className="shadow-xl shadow-green-700 mx-10 transform hover:scale-125 translate-transform duration-75 ease-linear"/>
                    <Image src="/images/project1-3.jpg" alt="project1" width={350} height={200} className="shadow-xl shadow-green-700 mx-10 transform hover:scale-125 translate-transform duration-75 ease-linear"/>
                    <video controls autoPlay muted loop src="/videos/test_mobile_robot_project1.mp4" width={400} height={200} className="shadow-xl shadow-green-700 mx-10 transform hover:scale-125 translate-transform duration-75 ease-linear"/>
                </div>
            </div>
            <hr className="border-2 border-green-600 mt-2 mr-4"></hr>
            <div className="py-8">
                <h1 className="text-4xl text-green-600 font-bold">Third Project : Robot Fighting</h1>
                <h1 className="text-3xl py-4">I focus on Program </h1>
                <ul className="list-disc list-inside ml-6 space-y-2 py-4 text-2xl">
                    <li>Time : (01/2023 - 04/2023) and start again from (11/2023 - 12/2023)</li>
                    <li>My Team: Sok Soly(Circuit), Ang Dara(Mechanic) , Bun Sa(Mechanic),Soeurn Sophana(Mechanic), Seng vesna(Support Money) </li>
                    <li>Flow of Process : NRF24L01(transmit(vx,vy,omegaz)) &rarr; Inverse kinematics &rarr; Speed Motor(V1,V2,V3,V4) &rarr; PI on DC Motor &rarr;  </li>
                    <li>Flow to Design : Start design mechanic on Fusion 360 &rarr; Find knowledge about circuit on driver motor(BTS7960) and Power Supply &rarr; Program on STM32 board use(STM32F103C8T6)</li>
                </ul>
                <div className="flex flex-row pb-4 pt-12 justify-center">
                    <Image src="/images/robotfight.jpg" alt="robotfight" width={450} height={100} className="shadow-xl shadow-green-700 mx-10 transform hover:scale-110 translate-transform duration-75 ease-linear"/>
                    <video controls autoPlay muted loop src="/videos/robotfighting.mp4" width={500} height={50} className="shadow-xl shadow-green-700 mx-10 transform hover:scale-110 translate-transform duration-75 ease-linear"/>
                </div>
            </div>
            <hr className="border-2 border-green-600 mt-2 mr-4"></hr>
            <div className="py-8">
                <h1 className="text-4xl text-green-600 font-bold">Fourth Project: ROBOCON-IT01 2023-2024 </h1>
                <h1 className="text-3xl py-4">I focus on Programming on MR1 and MR2 for ROBOCON-IT01 and I'm leading on part programming in this project</h1>
                <ul className="list-disc list-inside ml-6 space-y-2 py-4 text-2xl">
                    <li>Time : (12/2023 - 07/2024)</li>
                    <li>MR1 robot is semi-autonomous and MR2 robot is fully-autonomous</li>
                    <li>components: PS4(1), MiniPC(2), Rotary Encoders(7), IMU(2), Realsense Camera(1), Webcame(1), Laser(5), DC motor(18), Servo motor(2), Stepper motor(1), </li>
                    <h1 className="pl-8">Approximaty sensor(3), USB-CAN(2), etc.</h1>
                    <li>Sofware: ROS2 and STM32CubeIDE</li>
                    <li>Flow of MR1 control </li>
                    <li>Flow of MR2 control </li>
                    <li>Code : <Link href="https://github.com/boyloy21/ROBOCON-ITC01-2024" className="text-blue-500 hover:underline">github.com/boyloy21/ROBOCON-ITC01-2024</Link></li>
                </ul>
                <div className="flex flex-row pb-4 pt-12">
                    <Image src="/images/image.png" alt="project2" width={450} height={250} className="shadow-xl shadow-green-700 mx-10 transform hover:scale-125 translate-transform duration-75 ease-linear"/>
                    <video src="/videos/test2.mp4" controls autoPlay muted loop width={450} height={250} className="shadow-xl shadow-green-700 mx-10 transform hover:scale-125 translate-transform duration-75 ease-linear"/>
                    <video src="/videos/testingM2.mp4" controls autoPlay muted loop width={450} height={250} className="shadow-xl shadow-green-700 mx-10 transform hover:scale-125 translate-transform duration-75 ease-linear"/>
                </div>
            </div>
            <hr className="border-2 border-green-600 mt-2 mr-4"></hr>
            <div className="py-8">
                <h1 className="text-4xl text-green-600 font-bold">Fifth Project: Build Website and Mobile App of KAYVIKA </h1>
                <h1 className="text-3xl ">I work on UX/UI Design using figma, develop frontend using react,nextjs and backend using MongoDB for website and mobile app using react native.</h1>
                <ul className="list-disc list-inside ml-6 space-y-2 py-4 text-2xl">
                    <li>Time : (08/2024 - Present)</li>
                    <li>KAYVIKA is  a website and mobile app  to translate sign language into text and sound</li>
                </ul>
                <div className="flex flex-row pb-4 pt-12 justify-center">
                    <video src="/videos/appfigma.mp4" controls autoPlay muted loop width={550} height={250} className="shadow-xl shadow-green-700 mx-10 transform hover:scale-125 translate-transform duration-75 ease-linear"/>
                    <video src="/videos/testingweb-kayvika.mp4" controls autoPlay muted loop width={550} height={250} className="shadow-xl shadow-green-700 mx-10 transform hover:scale-125 translate-transform duration-75 ease-linear"/>
                </div>
            </div>
            <hr className="border-2 border-green-600 mt-2 mr-4"></hr>
            </div>
        </div>
    );
}