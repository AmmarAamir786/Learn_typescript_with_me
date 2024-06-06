type Car = {
    manufacturer: string;
    model: string;
    color?: string;
    features?: string[];
}

function createCar(
    manufacturer: string,
    model: string,
    ...options: any[]
): Car {
    let car: Car = {
        manufacturer,
        model,
    };

    for (const option of options) {
        if (typeof option === "object") {
            Object.assign(car, option);
        } else {
            console.log("Invalid option:", option);
        }
    }

    return car;
}

const carInfo = createCar(
    "Toyota",
    "Camry",
    { color: "blue" },
    { features: ["GPS", "Leather seats"] }
);

console.log(carInfo);
