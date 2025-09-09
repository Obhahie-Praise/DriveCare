
let formSection = ``;

function maintainancePurpose() {
    formSection = `<div class="" id="maintainance-section">
                        <p class="text-white text-2xl font-semibold mb-2">Maintainance</p>
                        <div class="text-white mt-5">
                            <p class="text-white text-lg py-3">When last did you carry out a maintainance?</p>
                            <select name="last maintainance" id="last-maintainance" class="bg-black border-2 rounded-lg px-4 py-3 ml-4">
                                <option value="last-week" class="rounded-t-lg">Last Week</option>
                                <option value="last-month">Last Month</option>
                                <option value="last-3-month">Last 3 months</option>
                                <option value="noclue">I dont remember</option>
                            </select>
                        </div>

                        <div class="mt-5 text-white">
                            <p class="text-white text-lg py-3">What type of service do you need?</p>
                            <select name="maintainance-service" id="maintainance-service" class="bg-black border-2 rounded-lg px-4 py-3 ml-4">
                                <option value="oil-change">Oil Change</option>
                                <option value="tire-rotation/replacement">Tire Rotation / Replacement</option>
                                <option value="brake-">Brake Inspection</option>
                                <option value="engine-check">Engine Check</option>
                                <option value="battery-replacement">Battery Replacement</option>
                                <option value="air-filter/fluid-top-up">Air Filter / Fluid Top-up</option>
                                <option value="general-service/full-check-up">General Service / Full Check-up</option>
                            </select>
                        </div>
                    </div>`;
                    document.querySelector('.js-form-section').innerHTML = formSection;
}

function repairPurpose() {
    formSection = `<div class="" id="repair-section">
                        <p class="text-white font-semibold text-2xl mt-7">Problem Description</p>
                        <div class="flex flex-col">
                            <label class="py-3 text-white text-lg" for="repair-issuse">What issuse are you experiencing?</label>
                            <textarea class=" text-white border-2 border-gray-300 text-lg rounded-md placeholder:text-gray-400 py-2 pl-2 mx-4 h-48" placeholder="Describe Your Issuse" name="repair-issuse" id="repair-issuse" required></textarea>
                        </div>
                        <div class="flex flex-col mt-5">
                            <label class="py-3 text-white text-lg" for="repair-issuse-start">When did the Problem Start?</label>
                            <input type="text" class=" text-white border-2 border-gray-300 text-lg rounded-md placeholder:text-gray-400 py-2 pl-2 mx-4" placeholder="It Started..." required name="repair-issuse-start" id="repair-issuse-start"></input>
                        </div>
                        <div class="flex flex-col mt-5 text-white">
                            <p class="py-2 text-white text-lg" for="repair-issuse-frequency">Does the problem happen consistently or only sometimes?</p>
                            <div class="flex flex-col py-2">
                                <span class="py-1 text-lg"><input type="radio" name="frequency" value="always" id="always"><label for="always" class="px-2">Always</label></span>
                                <span class="py-1 text-lg"><input type="radio" name="frequency" value="sometimes" id="sometimes"><label for="sometimes" class="px-2">Sometimes</label></span>
                                <span class="py-1 text-lg"><input type="radio" name="frequency" value="rarely" id="rarely"><label for="rarely" class="px-2">Rarely</label></span>
                            </div>
                        </div>
                        <div class="flex flex-col mt-5 text-white">
                            <p class="py-2 text-white text-lg">Does the issue cause warning lights on the dashboard?</p>
                            <div class="flex flex-col py-2">
                                <span class="py-1 text-lg"><input type="radio" name="dash-lights" value="yes" id="yes"><label for="yes" class="px-2">Yes</label></span>
                                <span class="py-1 text-lg"><input type="radio" name="dash-lights" value="no" id="no"><label for="no" class="px-2">No</label></span>
                            </div>
                        </div>
                        <div class="text-white mt-5 text-lg flex flex-col">
                            <label class="py-4" for="tried-something">Have you tried any fixes already?</label>
                            <textarea class="text-white border-2 border-gray-300 text-lg rounded-md placeholder:text-gray-400 py-2 pl-2 mx-4 h-48" placeholder="What have You Tried?" name="tried-something" id="tried"></textarea>
                        </div>

                        <p class="text-white font-semibold text-2xl mt-7">Repair Type (if known)</p>
                        <select class="text-white bg-black border-2 rounded-lg px-4 py-3 ml-4 mt-3" name="repair-type" id="repair-type">
                            <option value="engine">Engine</option>
                            <option value="transmission/gearbox">Transmission / Gearbox</option>
                            <option value="suspension">Suspension</option>
                            <option value="brakes">Brakes</option>
                            <option value="electrical">Electrical (lights, wiring, battery, etc.)</option>
                            <option value="ac/heating">AC / Heating</option>
                            <option value="body">Body / Exterior Damage</option>
                            <option value="other">Other (please specify)</option>
                        </select>
                    </div>`;
                    document.querySelector('.js-form-section').innerHTML = formSection;
}

function customizationPurpose() {
    formSection = `<div class="mt-10 text-white" id="customization-section">
                        <div class="flex flex-col">
                            <p class="py-2 text-2xl font-semibold">Customization Options</p>
                            <select class="text-white bg-black border-2 rounded-lg px-4 py-3 ml-4 mt-3" name="repair-type" id="repair-type">
                                <option value="color-change">Color Change</option>
                                <option value="interior-change">Interior Change</option>
                                <option value="rim-wheel">RIm & Wheels</option>
                                <option value="body-kit">Body Kit</option>
                                <option value="lighting">Lighting Upgrades</option>
                                <option value="other">Other(please specify)</option>
                            </select>
                        </div>
                        <p class="py-2 text-white text-xl mt-5 font-semibold">Do you already have custom parts, or should we source them?</p>
                        <div class="flex flex-col py-2">
                            <span class="py-1 text-lg"><input type="radio" name="custom-parts" required id="i-have"><label for="i-have" class="px-2">I Have Parts</label></span>
                            <span class="py-1 text-lg"><input type="radio" name="custom-parts" required id="i-dont-have"><label for="i-dont-have" class="px-2">Provide Parts</label></span>
                        </div>
                    </div>`;
                    document.querySelector('.js-form-section').innerHTML = formSection;
}

function tuningPurpose() {
    formSection = `<div class="mt-10 text-white" id="tuning-section">
                        <div class="flex flex-col">
                            <p class="py-2 font-semibold text-2xl">Tuning Options</p>
                            <select class="text-white bg-black border-2 rounded-lg px-4 py-3 ml-4 mt-2" name="tuning-type" id="tuning-type">
                                <option value="engine-tuning">Engine Tuning</option>
                                <option value="exhaust-upgrade">Exhaust Upgrade</option>
                                <option value="suspension">Suspension & Handling</option>
                                <option value="brake-system">Brake System Upgrade</option>
                                <option value="ecu-remap">ECU Remapping</option>
                                <option value="turbo-supercharger">Turbo / Supercharger</option>
                                <option value="other">Other (please specify)</option>
                            </select>
                        </div>

                        <p class="py-2 text-white text-xl mt-5 font-semibold">
                            What’s your goal with tuning?
                        </p>
                        <div class="flex flex-col py-2">
                            <span class="py-1 text-lg">
                                <input type="radio" required name="tuning-goal" id="performance" value="performance">
                                <label for="performance" class="px-2">More Performance / Speed</label>
                            </span>
                            <span class="py-1 text-lg">
                                <input type="radio" required name="tuning-goal" id="efficiency" value="efficiency">
                                <label for="efficiency" class="px-2">Better Fuel Efficiency</label>
                            </span>
                            <span class="py-1 text-lg">
                                <input type="radio" required name="tuning-goal" id="balanced" value="balanced">
                                <label for="balanced" class="px-2">Balanced Performance & Efficiency</label>
                            </span>
                        </div>
                    </div>`;
                    document.querySelector('.js-form-section').innerHTML = formSection;
}

const form = document.getElementById('appointment-form')

form.addEventListener('submit', () => {
    setTimeout(() => {
        form.reset()
    }, 1000);
});