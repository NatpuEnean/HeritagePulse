def material_factor(material):

    factors = {
        "granite": 0.3,
        "marble": 0.9,
        "sandstone": 0.8
    }

    return factors.get(material, 0.5)


def decay_velocity(material, humidity, pollution, temperature):

    temp_stress = max(0, temperature - 30)

    score = (
        0.35 * humidity +
        0.25 * pollution +
        0.25 * temp_stress +
        0.15 * 20
    )

    return material_factor(material) * score

def find_decay_cause(humidity, pollution, temperature):

    causes = {
        "Humidity Damage": humidity * 0.35,
        "Air Pollution Corrosion": pollution * 0.25,
        "Thermal Stress": max(0, temperature - 30) * 0.25
    }

    main_cause = max(causes, key=causes.get)

    return main_cause

def get_solution(cause):

    solutions = {
        "Humidity Damage":
        "Apply moisture-resistant coatings and improve drainage around the structure.",

        "Air Pollution Corrosion":
        "Regular cleaning and chemical protection to reduce pollutant deposition.",

        "Thermal Stress":
        "Protect exposed surfaces with thermal protective treatments and monitoring."
    }

    return solutions.get(cause, "Regular structural monitoring recommended.")