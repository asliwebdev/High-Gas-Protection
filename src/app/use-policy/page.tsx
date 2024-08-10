import Image from "next/image";

export default function UsePolicy() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#252525] px-4 py-10 md:py-20">
      <div>
        <div className="flex flex-wrap gap-10">
          <div>
          <h1 className="text-5xl font-bold">HGP – High Gas Protection</h1>
          <h3 className="font-bold text-2xl mt-10">Installation and Registration Guide for HGP Gas Sensor via Web Page</h3>
          </div>
          <Image src="/hgpimage.png" alt="detector image" width={300} height={200} />
        </div>
        <div className="mt-10 flex flex-wrap gap-10">
          <div>
          <h3 className="font-bold text-2xl">1. Installing the Device</h3>
          <h4 className="mt-5 text-lg font-bold mb-4">1.1. Placing the Device</h4>
          <ul className="list-disc pl-10">
            <li>Place the HGP gas sensor near the gas sources in the room, but away from open flames or high heat sources. </li>
            <li>Securely mount the device on the wall or a suitable location.</li>
          </ul>
          <h4 className="mt-5 text-lg font-bold mb-4">1.2. Electrical Connection</h4>
          <ul className="list-disc pl-10">
            <li>Connect the device to a power source. </li>
            <li>The device has a built-in battery, so it will continue to operate even if the power is interrupted.</li>
          </ul>
          </div>
          <Image src="/fire.png" alt="fire image" width={200} height={150} className="self-start" />
        </div>
        <div className="mt-10">
          <h3 className="font-bold text-2xl">2. Registering on the Web Page</h3>
          <h4 className="mt-5 text-lg font-bold mb-4">2.1. Accessing the Web Page</h4>
          <ul className="list-disc pl-10">
            <li>Open your browser and go to the official HGP gas sensor website.</li>
          </ul>
          <h4 className="mt-5 text-lg font-bold mb-4">2.2. Registering as a New User</h4>
          <ul className="list-disc pl-10">
            <li>Click the "Register" button.</li>
            <li>Enter the required information: your name, email address, phone number, and password.</li>
            <li>Click the "Register" button to complete the registration.</li>
          </ul>
          <h4 className="mt-5 text-lg font-bold mb-4">2.3. Logging In</h4>
          <ul className="list-disc pl-10">
            <li>After registering, enter your login and password.</li>
            <li>Click the "Login" button to access the system.</li>
          </ul>
        </div>
        <div className="mt-10">
          <h3 className="font-bold text-2xl">3. Additional Features of the Device</h3>
          <h4 className="mt-5 text-lg font-bold mb-4">3.1. Screen and Battery</h4>
          <ul className="list-disc pl-10">
            <li>The device has a built-in battery and a screen that shows the battery level and other information.</li>
          </ul>
          <h4 className="mt-5 text-lg font-bold mb-4">3.2. Automatic Gas Pipeline Blocking</h4>
          <ul className="list-disc pl-10">
            <li>The device automatically blocks gas pipelines if a hazard is detected.</li>
          </ul>
          <h4 className="mt-5 text-lg font-bold mb-4">3.3. Replaceable Parts</h4>
          <ul className="list-disc pl-10">
            <li>The device consists of two parts: the control unit and the automatic gas valve.</li>
            <li>If any part of the device fails, only the faulty part needs to be replaced.</li>
          </ul>
        </div>
        <div className="mt-10">
          <h3 className="font-bold text-2xl">4. Safety and Maintenance</h3>
          <h4 className="mt-5 text-lg font-bold mb-4">4.1. Safety</h4>
          <ul className="list-disc pl-10">
            <li>Do not use the sensor near open flames.</li>
            <li>Do not leave the device unattended for long periods.</li>
          </ul>
          <h4 className="mt-5 text-lg font-bold mb-4">4.2. Maintenance</h4>
          <ul className="list-disc pl-10">
            <li>Regularly inspect the device.</li>
            <li>If any part fails, replace only the faulty part.</li>
          </ul>
          <h4 className="mt-5 text-lg font-bold mb-4">4.3. Troubleshooting</h4>
          <ul className="list-disc pl-10">
            <li>If the device is not working, check the power connection.</li>
            <li>If you have trouble accessing the web page, ensure you are entering the correct login and password.</li>
            <li>For additional help, contact the technical support center.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
