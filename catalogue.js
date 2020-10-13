const BOOKS = [
  {
    id: "0",
    genre: ["Satire"],
    title: "Animal Farm",
    author: "George Orwell",
    publisher: "Penguin",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/4150IkIpANL._SX303_BO1,204,203,200_.jpg",
    price: "199",
    synopsis:
      "Animal Farm is an allegorical novella by George Orwell, first published in England on 17 August 1945. The book tells the story of a group of farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy.",
  },
  {
    id: "1",
    genre: ["Sci-Fi", "Satire"],
    title: "1984",
    author: "George Orwell",
    publisher: "Secker & Warburg",
    image: "https://images-na.ssl-images-amazon.com/images/I/514CVwOrybL.jpg",
    price: "150",
    synopsis:
      "1984 is a dystopian novella by George Orwell published in 1949, which follows the life of Winston Smith, a low ranking member of 'the Party', who is frustrated by the omnipresent eyes of the party, and its ominous ruler Big Brother. 'Big Brother' controls every aspect of people's lives.",
  },
  {
    id: "2",
    genre: ["Fantasy"],
    title: "The Immortals of Meluha",
    author: "Amish Tripathi",
    publisher: "Westland Press",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/0e/The_Immortals_Of_Meluha.jpg",
    price: "350",
    synopsis:
      "The story takes place in the imaginary land of Meluha,and how they are saved from their wars by a tribal chief named Shiva.",
  },
  {
    id: "3",
    genre: ["Fantasy"],
    title: "The Secret of the Nagas",
    author: "Amish Tripathi",
    publisher: "Westland Press",
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/78/The_Secret_of_the_Nagas.jpg",
    price: "350",
    synopsis:
      "It begins from where its predecessor, The Immortals of Meluha, left off, with Shiva trying to save Sati from the invading Naga. Later Shiva takes his troop of soldiers and travels far east to the land of Branga, where he wishes to find a clue to reach the Naga people.",
  },
  {
    id: "4",
    genre: ["Fantasy"],
    title: "The Oath of the Vayuputras",
    author: "Amish Tripathi",
    publisher: "Westland Press",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e5/The_Oath_of_the_Vayuputras.jpg",
    price: "350",
    synopsis:
      "In this book Shiva reaches the Naga capital and finally the evil is revealed. Shiva prepares for a holy war against his true enemy, a man whose name instils dread in the fiercest of warriors. Shiva reaches Pariha, the land of fairies, to the ones who have never offered any help to him: the Vayuputras.",
  },
  {
    id: "5",
    genre: ["Fantasy"],
    title: "Scion of Ikshvaku",
    author: "Amish Tripathi",
    publisher: "Westland Press",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/57/Scion_of_Ikshvaku_cover.jpg",
    price: "300",
    synopsis:
      "The story begins with King Dashrath of Ayodhya being defeated in a war by Lankan trader Raavan, and the birth of his son Ram. It follows through Ram's childhood and tutelage, along with the politics surrounding his ascension to the throne, and ultimately his 14-year exile, accompanied by wife Sita and brother Lakshman.",
  },
  {
    id: "6",
    genre: ["Fantasy"],
    title: "Sita: Warrior of Mithila",
    author: "Amish Tripathi",
    publisher: "Westland Press",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/03/Sita_Warrior_of_Mithila_cover.jpg",
    price: "300",
    synopsis:
      "In this book, you will follow Lady Sita's journey from an Adopted Child to the Prime Minister to finding her true calling.",
  },
  {
    id: "7",
    genre: ["Fantasy"],
    title: "Raavan: Enemy of Aryavarta",
    author: "Amish Tripathi",
    publisher: "Westland Press",
    image: "https://images-na.ssl-images-amazon.com/images/I/91MA0P7wEPL.jpg",
    price: "300",
    synopsis:
      "Raavan: Enemy of Aryavarta chronicles the life of Ravan until the time he kidnaps Sita. This exhilarating third book of the Ram Chandra series sheds light on Raavan, the king of Lanka. And the light shines on darkness of the darkest kind. Is he the greatest villain in history or just a man in a dark place, all the time?",
  },
  {
    id: "8",
    genre: ["Fantasy"],
    title: "Legend of Suheldev: The King Who Saved India",
    author: "Amish Tripathi",
    publisher: "Westland Press",
    image: "https://images-na.ssl-images-amazon.com/images/I/91HT7rB8tfL.jpg",
    price: "300",
    synopsis:
      "Read this blockbuster epic adventure of courage and heroism, a fictional tale based on true events, that recounts the story of that lionhearted warrior and the magnificent Battle of Bahraich.",
  },
  {
    id: "9",
    genre: ["Fantasy"],
    title: "Harry Potter and the Philosopher's Stone",
    author: "J K Rowling",
    publisher: "Bloomsbury",
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
    price: "250",
    synopsis:
      "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
  },
  {
    id: "10",
    genre: ["Fantasy"],
    title: "Harry Potter and the Chamber of Secrets",
    author: "J K Rowling",
    publisher: "Bloomsbury",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg",
    price: "250",
    synopsis:
      "Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone... Dobby's sinister predictions seem to be coming true.",
  },
  {
    id: "11",
    genre: ["Fantasy"],
    title: "Harry Potter and the Prizoner of Azkaban",
    author: "J K Rowling",
    publisher: "Bloomsbury",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg",
    price: "250",
    synopsis:
      "When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it's the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run - and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry's tea leaves... But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss...",
  },
  {
    id: "12",
    genre: ["Fantasy"],
    title: "Harry Potter and the Goblet of Fire",
    author: "J K Rowling",
    publisher: "Bloomsbury",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b6/Harry_Potter_and_the_Goblet_of_Fire_cover.png",
    price: "250",
    synopsis:
      "The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!",
  },
  {
    id: "13",
    genre: ["Fantasy"],
    title: "Harry Potter and the Order of the Phoenix",
    author: "J K Rowling",
    publisher: "Bloomsbury",
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg",
    price: "250",
    synopsis:
      "Dark times have come to Hogwarts. After the Dementors' attack on his cousin Dudley, Harry Potter knows that Voldemort will stop at nothing to find him. There are many who deny the Dark Lord's return, but Harry is not alone: a secret order gathers at Grimmauld Place to fight against the Dark forces. Harry must allow Professor Snape to teach him how to protect himself from Voldemort's savage assaults on his mind. But they are growing stronger by the day and Harry is running out of time...",
  },
  {
    id: "14",
    genre: ["Fantasy"],
    title: "Harry Potter and the Half-Blood Prince",
    author: "J K Rowling",
    publisher: "Bloomsbury",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b5/Harry_Potter_and_the_Half-Blood_Prince_cover.png",
    price: "250",
    synopsis:
      "When Dumbledore arrives at Privet Drive one summer night to collect Harry Potter, his wand hand is blackened and shrivelled, but he does not reveal why. Secrets and suspicion are spreading through the wizarding world, and Hogwarts itself is not safe. Harry is convinced that Malfoy bears the Dark Mark: there is a Death Eater amongst them. Harry will need powerful magic and true friends as he explores Voldemort's darkest secrets, and Dumbledore prepares him to face his destiny...",
  },
  {
    id: "15",
    genre: ["Fantasy"],
    title: "Harry Potter and the Deathly Hallows",
    author: "J K Rowling",
    publisher: "Bloomsbury",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg",
    price: "250",
    synopsis:
      "As he climbs into the sidecar of Hagrid's motorbike and takes to the skies, leaving Privet Drive for the last time, Harry Potter knows that Lord Voldemort and the Death Eaters are not far behind. The protective charm that has kept Harry safe until now is broken, but he cannot keep hiding. The Dark Lord is breathing fear into everything Harry loves and to stop him Harry will have to find and destroy the remaining Horcruxes. The final battle must begin - Harry must stand and face his enemy...",
  },
  {
    id: "16",
    genre: ["Crime"],
    title: "Troubled Blood",
    author: "J K Rowling",
    publisher: "Sphere",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/35/Troubled_Blood_by_Robert_Galbraith_%28JK_Rowling%29_-_book_cover.jpg",
    price: "900",
    synopsis:
      "Private Detective Cormoran Strike is visiting his family in Cornwall when he is approached by a woman asking for help finding her mother, Margot Bamborough - who went missing in mysterious circumstances in 1974.",
  },
  {
    id: "17",
    genre: ["Horror", "Sci-Fi"],
    title: "The Institute",
    author: "Stephen King",
    publisher: "Scribner",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/00/The_Institute_%28King_novel%29.png",
    price: "650",
    synopsis:
      "Deep in the woods of Maine, there is a dark state facility where kids, abducted from across the United States, are incarcerated. In the Institute they are subjected to a series of tests and procedures meant to combine their exceptional gifts - telepathy, telekinesis - for concentrated effect.",
  },
  {
    id: "18",
    genre: ["Horror", "Thriller"],
    title: "The Shining",
    author: "Stephen King",
    publisher: "Doubleday",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Shiningnovel.jpg",
    price: "249",
    synopsis:
      "The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies. His family accompanies him on this job, including his young son Danny Torrance, who possesses 'the shining', an array of psychic abilities that allow Danny to see the hotel's horrific past. Soon, after a winter storm leaves them snowbound, the supernatural forces inhabiting the hotel influence Jack's sanity, leaving his wife and son in incredible danger.",
  },
  {
    id: "19",
    genre: ["Horror", "Fantasy", "Thriller"],
    title: "It",
    author: "Stephen King",
    publisher: "Viking",
    image: "https://upload.wikimedia.org/wikipedia/en/5/5a/It_cover.jpg",
    price: "249",
    synopsis:
      "It follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey. 'It' primarily appears in the form of Pennywise the Dancing Clown to attract its preferred prey of young children.",
  },
  {
    id: "20",
    genre: ["Fantasy"],
    title: "The Stand",
    author: "Stephen King",
    publisher: "Doubleday",
    image: "https://upload.wikimedia.org/wikipedia/en/9/96/The_Stand_cover.jpg",
    price: "249",
    synopsis:
      "The post-apocalyptic dark fantasy novel centers on a pandemic of a weaponized strain of influenza that kills almost the entire world population. The few survivors, united in groups, establish a new social system and engage in confrontation with each other.",
  },
  {
    id: "21",
    genre: ["Satire", "Historical"],
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    publisher: "Ballantine Books",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/db/Fahrenheit_451_1st_ed_cover.jpg",
    price: "350",
    synopsis:
      "Fahrenheit 451 presents a future American society where books are outlawed and 'firemen' burn any that are found.",
  },
  {
    id: "22",
    genre: ["Sci-Fi"],
    title: "Do Androids Dream of Electric Sheep?",
    author: "Philip K. Dick",
    publisher: "Doubleday",
    image: "https://upload.wikimedia.org/wikipedia/en/e/ee/DoAndroidsDream.png",
    price: "399",
    synopsis:
      "The novel is set in a post-apocalyptic San Francisco, where Earth's life has been greatly damaged by a nuclear global war, leaving most animal species endangered or extinct. The main plot follows Rick Deckard, a bounty hunter who is tasked with 'retiring' (i.e. killing) six escaped Nexus-6 model androids, while a secondary plot follows John Isidore, a man of sub-par IQ who aids the fugitive androids.",
  },
  {
    id: "23",
    genre: ["Sci-Fi"],
    title: "Flow My Tears, the Policeman Said",
    author: "Philip K. Dick",
    publisher: "Doubleday",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/58/FlowMyTearsThePolicemanSaid%281stEd%29.jpg",
    price: "599",
    synopsis:
      "The novel is set in a futuristic dystopia where the United States has become a police state in the aftermath of a Second Civil War. The story follows genetically enhanced pop singer and television star Jason Taverner who wakes up in a world where he has never existed.",
  },
  {
    id: "24",
    genre: ["Romance", "Coming of Age"],
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    publisher: "Penguin",
    image: "https://images-na.ssl-images-amazon.com/images/I/81zqVhvbHbL.jpg",
    price: "449",
    synopsis:
      "The novel is a nostalgic story of loss and burgeoning sexuality.[2] It is told from the first-person perspective of Toru Watanabe, who looks back on his days as a college student living in Tokyo.[3] Through Watanabe's reminiscences, readers see him develop relationships with two very different women—the beautiful yet emotionally troubled Naoko, and the outgoing, lively Midori.",
  },
  {
    id: "25",
    genre: ["Magical Realism"],
    title: "A Wild Sheep Chase",
    author: "Haruki Murakami",
    publisher: "Penguin",
    image: "https://images-na.ssl-images-amazon.com/images/I/61a5Xay-E2L.jpg",
    price: "449",
    synopsis:
      "In A Wild Sheep Chase, Murakami blends elements of American and English literature with Japanese contexts, exploring post-WWII Japanese cultural identity. The book is part mystery and part magical realism with a postmodern twist.",
  },
  {
    id: "26",
    genre: ["Historical"],
    title: "Killing Commendatore",
    author: "Haruki Murakami",
    publisher: "Penguin",
    image: "https://images-na.ssl-images-amazon.com/images/I/91LlffhyglL.jpg",
    price: "850",
    synopsis:
      "In Killing Commendatore, a thirty-something portrait painter in Tokyo is abandoned by his wife and finds himself holed up in the mountain home of a famous artist, Tomohiko Amada. When he discovers a strange painting in the attic, he unintentionally opens a circle of mysterious circumstances. To close it, he must complete a journey that involves a mysterious ringing bell, a two-foot-high physical manifestation of an Idea, a dapper businessman who lives across the valley, a precocious thirteen-year-old girl, a Nazi assassination attempt during World War II in Vienna, a pit in the woods behind the artist’s home, and an underworld haunted by Double Metaphors.",
  },
  {
    id: "27",
    genre: ["Magical Realism", "Fantasy"],
    title: "Kafka on the Shore",
    author: "Haruki Murakami",
    publisher: "Penguin",
    image: "https://images-na.ssl-images-amazon.com/images/I/71H+DyKPwyL.jpg",
    price: "449",
    synopsis:
      "Kafka Tamura runs away from home at fifteen, under the shadow of his father's dark prophesy. The aging Nakata, tracker of lost cats, who never recovered from a bizarre childhood affliction, finds his pleasantly simplified life suddenly turned upside down. As their parallel odysseys unravel, cats converse with people; fish tumble from the sky; a ghost-like pimp deploys a Hegel-spouting girl of the night; a forest harbours soldiers apparently un-aged since World War II. There is a savage killing, but the identity of both victim and killer is a riddle - one of many which combine to create an elegant and dreamlike masterpiece.",
  },
  {
    id: "28",
    genre: ["Drama"],
    title: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    publisher: "Bloomsbury",
    image: "https://images-na.ssl-images-amazon.com/images/I/81DFcrQgjrL.jpg",
    price: "300",
    synopsis:
      "Mariam is only fifteen when she is sent to Kabul to marry Rasheed. Nearly two decades later, a friendship grows between Mariam and a local teenager, Laila, as strong as the ties between mother and daughter. When the Taliban take over, life becomes a desperate struggle against starvation, brutality and fear. Yet love can move a person to act in unexpected ways, and lead them to overcome the most daunting obstacles with a startling heroism.",
  },
  {
    id: "29",
    genre: ["Coming of Age"],
    title: "Great Expectations",
    author: "Charles Dickens",
    publisher: "Fingerprint",
    image:
      "https://englishliterature.net/wp-content/uploads/Great-Expectations.jpg",
    price: "475",
    synopsis:
      "Taken to the Satis House by his Uncle Pumblechook one day, Pip, a young orphan, meets a wealthy, eccentric spinster, Miss Havisham and her beautiful, cold-hearted ward, Estella. Pip instantly falls in love with her. But in the days to come, he is constantly reminded that Estella is heartless.",
  },
  {
    id: "30",
    genre: ["Historical"],
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    publisher: "Oxford",
    image:
      "https://youngzine.org/sites/default/files/legacy/images/two-cities.jpg",
    price: "175",
    synopsis:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness. The year was 1775 and Lucie Manette, a young self- sacrificing orphan, realised she had been living a lie. Her father, Doctor Manette, whom she had taken for dead was, in fact, alive. The self-exiled nephew of the Marquis Evremonde, Charles Darnay was accused of treason in 1780, Madame Defarge, a victim of the French aristocracy, stitched a hidden registry of those condemned to die and Sydney Carton, the brilliant yet dissolute alcoholic English lawyer in love with Lucie, were all battling the social ills that had besieged France and England. from the serene lanes of London, they were drawn against their will to the bloodstained streets of Paris at the peak of the Reign of Terror and soon the guillotine cast a lethal shadow over their lives.",
  },
  {
    id: "31",
    genre: ["Coming of Age"],
    title: "David Copperfield",
    author: "Charles Dickens",
    publisher: "Oxford",
    image:
      "https://tukkbook.in/wp-content/uploads/2019/03/David-Copperfield-by-Charles-Dickens.jpg",
    price: "175",
    synopsis:
      "The novel features the character David Copperfield, and is written in the first person, as a description of his life until middle age, with his own adventures and the numerous friends and enemies he meets along his way. It is his journey of change and growth from infancy to maturity, as people enter and leave his life and he passes through the stages of his development.",
  },
  {
    id: "32",
    genre: ["Magical Realism", "Historical"],
    title: "Midnight's Children",
    author: "Salman Rushdie",
    publisher: "Jonathan Cape",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/9d/MidnightsChildren.jpg",
    price: "275",
    synopsis:
      "Midnight's Children deals with India's transition from British colonialism to independence and the partition of India. It is considered an example of postcolonial, postmodern, and magical realist literature. The story is told by its chief protagonist, Saleem Sinai, and is set in the context of actual historical events. The style of preserving history with fictional accounts is self-reflexive.",
  },
  {
    id: "33",
    genre: ["Magical Realism", "Comedy"],
    title: "Quichotte",
    author: "Salman Rushdie",
    publisher: "Jonathan Cape",
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/7d/Quichotte_%28Rushdie_novel%29.png",
    price: "575",
    synopsis:
      "Inspired by Miguel de Cervantes' classic novel Don Quixote, Quichotte is a metafiction that tells the story of an addled Indian American man who travels across America in pursuit of a celebrity television host with whom he has become obsessed.",
  },
  {
    id: "34",
    genre: ["Magical Realism"],
    title: "Shame",
    author: "Salman Rushdie",
    publisher: "Jonathan Cape",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/ShameNovel.JPG/220px-ShameNovel.JPG",
    price: "275",
    synopsis:
      "Omar Khayyam Shakil had three mothers who shared everything. They shared the symptoms of pregnancy, they shared the son that they all claim to have borne on the same night. Raised at their six breasts, Omar's mothers teach him to live a life without shame. And it is training that proves very useful when he leaves his mothers’ fortress and makes the fateful mistake of falling in love. For he finds himself an unwitting player in an ongoing duel between the families of two men – one a celebrated wager of war, the other a debauched lover of pleasure – living in a world caught between honour and humiliation, where a moment of shame could prove fatal.",
  },
  {
    id: "35",
    genre: ["Fantasy"],
    title: "American Gods",
    author: "Neil Gaiman",
    publisher: "Headline",
    image: "https://upload.wikimedia.org/wikipedia/en/4/49/American_gods.jpg",
    price: "325",
    synopsis:
      "After three years in prison, Shadow has served his time. But as the days and hours until his release tick away, he can feel a storm brewing. Two days before his release date, his wife Laura dies in a mysterious car crash, in adulterous circumstances. Dazed, Shadow travels home, only to encounter the bizarre Mr Wednesday, who claims to be a refugee from a distant war, a former god and the king of America. Together they embark on a very strange journey across the States, along the way solving the murders which have occurred every winter in one small American town. But the storm is about to break . . .",
  },
  {
    id: "36",
    genre: ["Fantasy", "Horror"],
    title: "The Graveyard Book",
    author: "Neil Gaiman",
    publisher: "Bloomsbury",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3e/TheGraveyardBook_Hardcover.jpg",
    price: "225",
    synopsis:
      "When a baby escapes a murderer intent on killing the entire family, who would have thought it would find safety and security in the local graveyard?Brought up by the resident ghosts, ghouls and spectres, Bod has an eccentric childhood learning about life from the dead. But for Bod there is also the danger of the murderer still looking for him - after all, he is the last remaining member of the family. A stunningly original novel deftly constructed over eight chapters, featuring every second year of Bod's life, from babyhood to adolescence. Will Bod survive to be a man?",
  },
  {
    id: "37",
    genre: ["Fantasy", "Horror", "Magical Realism"],
    title: "The Ocean at the End of the Lane",
    author: "Neil Gaiman",
    publisher: "William Morrow and Company",
    image:
      "https://upload.wikimedia.org/wikipedia/en/f/f7/Ocean_at_the_End_of_the_Lane_US_Cover.jpg",
    price: "499",
    synopsis:
      "A middle-aged man returns to his childhood home to attend a funeral. Although the house he lived in is long gone, he is drawn to the farm at the end of the road, where, when he was seven, he encountered a most remarkable girl, Lettie Hempstock, and her mother and grandmother. He hasn’t thought of Lettie in decades, and yet as he sits by the pond (a pond that she’d claimed was an ocean) behind the ramshackle old farmhouse where she once lived, the unremembered past comes flooding back. And it is a past too strange, too frightening, too dangerous to have happened to anyone, let alone a small boy.",
  },
  {
    id: "38",
    genre: ["Horror"],
    title: "Coraline",
    author: "Neil Gaiman",
    publisher: "Bloomsbury",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Coraline.jpg/220px-Coraline.jpg",
    price: "399",
    synopsis:
      "There is something strange about Coraline's new home. It's not the mist, or the cat that always seems to be watching her, nor the signs of danger that Miss Spink and Miss Forcible, her new neighbours, read in the tea leaves. It's the other house - the one behind the old door in the drawing room. Another mother and father with black-button eyes and papery skin are waiting for Coraline to join them there. And they want her to stay with them. For ever. She knows that if she ventures through that door, she may never come back.",
  },
  {
    id: "39",
    genre: ["Drama"],
    title: "The Golden Gate",
    author: "Vikram Seth",
    publisher: "Random House",
    image: "https://upload.wikimedia.org/wikipedia/en/b/ba/TheGoldenGate.jpg",
    price: "125",
    synopsis:
      "John, a young and successful engineer, finds his life boring outside his work and calls his ex-girlfriend Janet and grieves his loveless life. Janet agrees to help out John by finding him a date and advertises for the same in a local newspaper. Liz, a lawyer by profession responds to the ad. John and Liz hit it off instantly and very soon find themselves living together. Phil, a close friend of John, is a divorcee who lives with his son and raises his voice against nuclear weapons. When Phil attends the party at Liz’ family, he finds Ed, Liz’ brother and both fall in love. Set in the nostalgic era of 1980s, The Golden Gate trails the story of a group of youth living in San Francisco, who embark on a journey of interpreting life, in search of adventure, trying to understand the meaning of love.",
  },
  {
    id: "40",
    genre: ["Historical", "Drama", "Romance"],
    title: "A Suitable Boy",
    author: "Vikram Seth",
    publisher: "HarperCollins",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f6/Asuitableboy.jpg",
    price: "999",
    synopsis:
      "A Suitable Boy is set in a newly post-independence, post-partition India. The novel follows the story of four families over a period of 18 months, and centres on Mrs. Rupa Mehra's efforts to arrange the marriage of her younger daughter, Lata, to a 'suitable boy'. Lata is a 19-year-old university student who refuses to be influenced by her domineering mother or opinionated brother, Arun. Her story revolves around the choice she is forced to make between her suitors Kabir, Haresh, and Amit.",
  },
  {
    id: "41",
    genre: ["Romance"],
    title: "An Equal Music",
    author: "Vikram Seth",
    publisher: "Phoenix House",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/BroadwayBooks_ImprintofRandomHouse_1999_VikramSeth_AnEqualMusic_FirstEdition_Cover.jpg/200px-BroadwayBooks_ImprintofRandomHouse_1999_VikramSeth_AnEqualMusic_FirstEdition_Cover.jpg",
    price: "575",
    synopsis:
      "The plot concerns Michael, a professional violinist, who never forgot his love for Julia, a pianist he met as a student in Vienna. They meet again after a decade, and conduct a secret affair, though she is married and has one child. Their musical careers are affected by this affair and the knowledge that Julia is going deaf.",
  },
  {
    id: "42",
    genre: ["Erotic"],
    title: "Fifty Shades of Grey",
    author: "E L James",
    publisher: "Vintage",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/50ShadesofGreyCoverArt.jpg/220px-50ShadesofGreyCoverArt.jpg",
    price: "349",
    synopsis:
      "Based around Anastasia Steele, a 21-year old college girl who on behalf of her friend Kate interviews Christian Grey, an uber rich successful businessman. The unfolding sadomasochistic relationship turns ugly as the plot, filled with many twists and turns, further reveals about how the life of a simple college girl, who fell in love with the rich person, turns her world upside down.",
  },
  {
    id: "43",
    genre: ["Erotic"],
    title: "Fifty Shades Darker",
    author: "E L James",
    publisher: "Vintage",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/bb/Fifty_Shades_Darker_book_cover.jpg",
    price: "349",
    synopsis:
      "Daunted by the dark secrets of the tormented young entrepreneur Christian Grey, Ana Steele has broken off their relationship to start a new career with a US publishing house. But desire for Grey still dominates her every waking thought and when he proposes a new arrangement, she cannot resist. Soon she is learning more about the harrowing past of her damaged, driven and demanding Fifty Shades than she ever thought possible. But while Grey wrestles with his inner demons, Ana must make the most important decision of her life. And it's a decision she can only make on her own ..",
  },
  {
    id: "44",
    genre: ["Erotic"],
    title: "Fifty Shades Freed",
    author: "E L James",
    publisher: "Vintage",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/91/Fifty_Shades_Freed_book_cover.png",
    price: "349",
    synopsis:
      "Now, Anastasia and Christian reach a point in their lives when they think they have it all. From love and passion to unending future opportunities, they have everything going in their favour. Or so it seems. Anastasia must try to come to terms with Christian's extraordinary lifestyle, without having to lose out on her own identity. Christian, on the other hand must struggle to come to terms with his own past that often torments him. Just when they feel that they can accomplish just about anything when they are together, Anastasia's deepest fears become a reality, turning their lives upside down.",
  },
  {
    id: "45",
    genre: ["Coming of Age"],
    title: "The Catcher in the Rye",
    author: "J D Salinger",
    publisher: "Little, Brown and Company",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg",
    price: "249",
    synopsis:
      "Thrown out by his fourth school, Holden Caulfield, the protagonist of The Catcher in the Rye is a lazy, reclusive boy. The profanities used in the book best express his frustrated state of mind and from the way his parents live to his fake teachers to his roommate who scores with girls using sickly-sweet affection, no one is spared from it. After being fed up of the 'phoniness' of adulthood, Holden as a revolt heads to New York City. The book describes his encounters with flirtatious middle-aged women, prostitutes, nuns, wayward taxi drivers, alcohol and drugs. Holden's journey of self-discovery turns to a life full of debauchery but his sister Phoebe helps him recover from it. He narrates all these events to the readers as a flashback. The teenage dilemma about the way life works, feelings of alienation and the struggle against the artificial world, everything is described meticulously in The Catcher in the Rye.",
  },
  {
    id: "46",
    genre: ["War", "Comedy", "Satire", "Historical"],
    title: "Catch-22",
    author: "Joseph Heller",
    publisher: "Simon & Schuster",
    image: "https://upload.wikimedia.org/wikipedia/en/9/99/Catch22.jpg",
    price: "399",
    synopsis:
      "‘Catch-22’ is a revolutionary book by Joseph Heller which was first published in 1961. This book is a one of its kind. Heller uses a non-chronological third person omniscient narration to bind the threads together. Ideas flow into each other through random connections within the story. Events have been repeated through different point of views. The story is situated in the time of World War 2. This story is about the life of Captain John Yossarian, a U.S. Army Air Forces bombardier in 256th squadron who has been assigned to bomb enemy posts at eastern France and Italy.",
  },
  {
    id: "47",
    genre: ["Coming of Age"],
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publisher: "J. B. Lippincott & Co.",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51Z9p5AecCL._SX307_BO1,204,203,200_.jpg",
    price: "500",
    synopsis:
      "A novel that explores the tragedy of racism in the 1930s and the dramatics of the 'Great Depression', Harper Lee’s 'To Kill A Mockingbird' is a tale that infuses humour and sorrow into a touching story that lives on eternally in the minds of the readers. Set in a town that has its roots in a history of prejudice, violence and hypocrisy, the story follows the lives of Scout and Jem Finch as they come of age and experience the discrimination that floods their society. They watch their father (a lawyer) struggle for the justice of a black man who is charged with the rape of a white girl.",
  },
  {
    id: "48",
    genre: ["Tragedy"],
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publisher: "Chatto & Windus",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/The_Great_Gatsby_cover_1925_%281%29.jpg/330px-The_Great_Gatsby_cover_1925_%281%29.jpg",
    price: "125",
    synopsis:
      "It's the Roaring Twenties and New York City is the place to be. Everything can be purchased, everyone can be bought. But, can you make money erase your past? As more and more people lose themselves to the lure of money, ironically the only person who remains unaffected is Jay Gatsby, the enigmatic host of the most extravagant parties. In this definitive tale on American culture, Fitzgerald pits a chaste dream against the corrupting influences of wealth and comes up with an epic story that can only be defined as 'a Great American novel'.",
  },
  {
    id: "49",
    genre: ["Tragedy", "Historical"],
    title: "Les Misérables",
    author: "Victor Hugo",
    publisher: "Penguin",
    image: "https://images-na.ssl-images-amazon.com/images/I/81SGVhaL+dL.jpg",
    price: "125",
    synopsis:
      "In Les Misérables, Victor Hugo takes readers deep into the Parisian underworld, immerses them in a battle between good and evil, and carries them to the barricades during the uprising of 1832 with a breathtaking realism that is unsurpassed in modern prose. Within his dramatic story are themes that capture the intellect and the emotions: crime and punishment, the relentless persecution of Valjean by Inspector Javert, the desperation of the prostitute Fantine, the amorality of the rogue Thénardier, and the universal desire to escape the prisons of our own minds. Les Misérables gave Victor Hugo a canvas upon which he portrayed his criticism of the French political and judicial systems, but the portrait that resulted is larger than life, epic in scope—an extravagant spectacle that dazzles the senses even as it touches the heart.",
  },
  {
    id: "50",
    genre: ["Comedy", "Sci-Fi"],
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    publisher: "Pan Books",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/bd/H2G2_UK_front_cover.jpg",
    price: "199",
    synopsis:
      "It's an ordinary Thursday lunchtime for Arthur Dent until his house gets demolished. The Earth follows shortly afterwards to make way for a new hyperspace express route, and his best friend has just announced that he's an alien. At this moment, they're hurtling through space with nothing but their towels and an innocuous-looking book inscribed, in large friendly letters, with the words: DON'T PANIC. The weekend has only just begun . . .",
  },
];
