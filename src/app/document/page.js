import Link from "next/link";
import Image from "next/image";

export default function Contact() {
    return (
        <div className="w-full h-full bg-stone-700 mx-0">
        <div className="flex flex-col text-white font-bold mx-8 my-0">
            <h1 className="text-5xl text-center text-blue-600 font-bold py-4 ">Document</h1>
            <div className="pt-6">
                <h1 className="text-3xl">1. Robot Control</h1>
                <h1 className="ml-5 text-xl">In this book you can learn how to control the robot.And I payed 1 years 3 months to reseach and write this book. Please click on book to view all.</h1>
                <Link href="https://drive.google.com/file/d/14nP18CaiKZLwq6fVUdAN8j3a8GWFbIFO/view?usp=sharing" className=" mx-8">
                    <Image src="/images/robotcontrol.png" alt="robot control" width={300} height={500} className="shadow-xl shadow-blue-700 mx-10 transform hover:scale-110 transition-transform duration-75 ease-out"/>
                </Link>
            </div>
            <div className="pt-6">
                <h1 className="text-3xl">2. STM32 Microcontroller</h1>
                <h1 className="ml-5 text-xl">In this book you can learn how to use the STM32 microcontroller.And I payed 1 years 5 months to reseach and write this book. Please click on book to view all.</h1>
                <Link href="https://drive.google.com/file/d/1c7IoT05ihh9l4lsh7j9OfYPNKXvnBZtz/view?usp=sharing" className=" mx-8">
                    <Image src="/images/stm32.png" alt="stm32" width={300} height={500} className="shadow-xl shadow-blue-700 mx-10 transform hover:scale-110 transition-transform duration-75 ease-out "/>
                </Link>
            </div>
            <div className="pt-6">
                <h1 className="text-3xl ">3. Web and App KAYVIKA</h1>
                <h1 className="ml-5 text-xl">In this book I write for student project report which my student is related to Web and App.And I payed 3 months to reseach and write this book. Please click on book to view all.</h1>
                <Link href="https://drive.google.com/file/d/1FsJqRKkWl_geLi9kjSNPwhBep-NUtVVg/view?usp=sharing" className="mx-8">
                    <Image src="/images/kavykav1.png" alt="kayvika" width={300} height={500} className="shadow-xl shadow-blue-700 mx-10 transform hover:scale-110 transition-transform duration-75 ease-out"/>
                </Link>
            </div>
            <div className="pt-6">
                <h1 className="text-3xl">4. Robocon Document</h1>
                <h1 className="ml-5 text-xl">This book is me write report student project which my student is related to Robocon.And I payed 4 days to write but I payed 5 months for reseach it. Please click on book to view all.</h1>
                <Link href="https://drive.google.com/file/d/1mKfveqdINCybVw9ADhUORoHWmF0SAsXB/view?usp=sharing" className=" mx-8">
                    <Image src="/images/roboconv1.png" alt="robocon" width={300} height={500} className="shadow-xl shadow-blue-700 mx-10 transform hover:scale-110 transition-transform duration-75 ease-out"/>
                </Link>
            </div>
            <div className="pt-6">
                <h1 className="text-3xl">5. Controller</h1>
                <h1 className="ml-5 text-xl">In this book you can learn about controller such as PID, LQR, MPC, and more to control the robot. Please click on book to view all.</h1>
                <Link href="https://drive.google.com/file/d/1kyP3drC0yLaS1CBa96TfD048pRrqH94v/view?usp=sharing" className=" mx-8">
                    <Image src="/images/Controller.png" alt="controller" width={300} height={500} className="shadow-xl shadow-blue-700 mx-10 transform hover:scale-110 transition-transform duration-75 ease-out"/>
                </Link>
            </div>
            <div className="pt-6">
                <h1 className="text-3xl ">6. Filter and Estimate</h1>
                <h1 className="ml-5 text-xl">In this book you can learn about filter and estimate to control the robot. Please click on book to view all.</h1>
                <Link href="https://drive.google.com/file/d/1epuekJ-_tMJy2TdygkijX_2B822WH9ky/view?usp=sharing" className=" mx-8">
                    <Image src="/images/estimate.png" alt="filter" width={300} height={500} className="shadow-xl shadow-blue-700 mx-10 transform hover:scale-110 transition-transform duration-75 ease-out"/>
                </Link>
            </div>
            <div className="pt-6">
                <h1 className="text-3xl ">7. Wheel Robot</h1>
                <h1 className="ml-5 text-xl">In this book tell about kinematics of wheel such as Bicycle, Mecanum, Omni, Swerve Drive. Please click on book to view all.</h1>
                <Link href="https://drive.google.com/file/d/14XT0qUz0iZdK9wl9uTUOPDh4d-xA1i8M/view?usp=sharing" className=" mx-8">
                    <Image src="/images/wheel.png" alt="wheelrobot" width={300} height={500} className="shadow-xl shadow-blue-700 mx-10 transform hover:scale-110 transition-transform duration-75 ease-out"/>
                </Link>
            </div>
            <div className="pt-6">
                <h1 className="text-3xl">8. Stepper Motor</h1>
                <h1 className="ml-5 text-xl">In this book tell about to control the stepper motor. Please click on book to view all.</h1>
                <Link href="https://drive.google.com/file/d/1bMEUYvaxBxYXQs-mBm00zq8TUroPTkwt/view?usp=sharing" className=" mx-8">
                    <Image src="/images/stepper.png" alt="steppermotor" width={300} height={500} className="shadow-xl shadow-blue-700 mx-10 transform hover:scale-110 transition-transform duration-75 ease-out"/>
                </Link>
            </div>
        </div>
        </div>
    );
}