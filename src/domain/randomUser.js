const adjectives = [
    'Quick', 'Lazy', 'Charming', 'Clever', 'Sly', 'Brave', 'Calm', 'Delightful',
    'Eager', 'Fierce', 'Gentle', 'Happy', 'Jolly', 'Kind', 'Lively', 'Nice',
    'Proud', 'Quirky', 'Rusty', 'Shy', 'Tender', 'Unique', 'Vivid', 'Witty',
    'Xenial', 'Youthful', 'Zealous', 'Bold', 'Curious', 'Daring'
];

const nouns = [
    'Fox', 'Rabbit', 'Panda', 'Owl', 'Dragon', 'Eagle', 'Tiger', 'Bear', 'Wolf', 'Hawk',
    'Dolphin', 'Leopard', 'Moose', 'Parrot', 'Zebra', 'Shark', 'Whale', 'Falcon', 'Cheetah',
    'Buffalo', 'Alligator', 'Elephant', 'Koala', 'Giraffe', 'Hippopotamus', 'Rhinoceros',
    'Badger', 'Beaver', 'Coyote', 'Kangaroo'
];

const verbsInNounForm = [
    'Runner', 'Sleeper', 'Eater', 'Thinker', 'Creator', 'Builder', 'Painter', 'Watcher', 'Seeker', 'Finder',
    'Rider', 'Writer', 'Fighter', 'Singer', 'Dancer', 'Gamer', 'Reader', 'Listener', 'Speaker', 'Planner',
    'Teacher', 'Learner', 'Driver', 'Flyer', 'Swimmer', 'Jumper', 'Cooker', 'Gardener', 'Shopper', 'Traveler'
];

const gerundVerbs = [
    'Running', 'Sleeping', 'Eating', 'Thinking', 'Creating', 'Building', 'Painting', 'Watching',
    'Seeking', 'Finding', 'Riding', 'Writing', 'Fighting', 'Singing', 'Dancing', 'Gaming',
    'Reading', 'Listening', 'Speaking', 'Planning', 'Teaching', 'Learning', 'Driving',
    'Flying', 'Swimming', 'Jumping', 'Cooking', 'Gardening', 'Shopping', 'Traveling'
];

function randomUser() {
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const formatType = Math.random() > 0.5; // Randomly choose the format

    let rawUsername;

    if (formatType) {
        // Format: Adjective Gerund Noun
        const gerundVerb = gerundVerbs[Math.floor(Math.random() * gerundVerbs.length)];
        rawUsername = `${adjective}${gerundVerb}${noun}`;
    } else {
        // Format: Adjective Noun VerbInNounForm
        const verbInNoun = verbsInNounForm[Math.floor(Math.random() * verbsInNounForm.length)];
        rawUsername = `${adjective}${noun}${verbInNoun}`;
    }

    const suffix = '';//Math.floor(Math.random() * 10000);

    return `${rawUsername}${suffix}`;
}


export default randomUser;
