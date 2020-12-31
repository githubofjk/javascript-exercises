let findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        // if oldestPerson object is empty, then current person is oldest
        if (("name" in oldest) === false) {
            for (key in person) {
                oldest[key] = person[key];
            }
        }

        // replace existing oldest if current person is older than existing oldes
        if ((person.yearOfDeath - person.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth)) {
            for (key in person) {
                oldest[key] = person[key];
            }
        }

        return oldest;
    }, {});
}

module.exports = findTheOldest