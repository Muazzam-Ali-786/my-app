'use client';
import { useState, useEffect } from 'react';

const allQuizzes = {
  'Science': [
    { q: "What is the chemical symbol for gold?", options: ["Gd", "Au", "Ag", "Fe"], correct: 1 },
    { q: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1 },
    { q: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], correct: 2 },
    { q: "How many bones are in the adult human body?", options: ["206", "186", "226", "216"], correct: 0 },
    { q: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 2 },
    { q: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Vacuole"], correct: 1 },
    { q: "Which element has the atomic number 1?", options: ["Helium", "Oxygen", "Hydrogen", "Carbon"], correct: 2 },
    { q: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"], correct: 0 },
    { q: "Which scientist proposed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Stephen Hawking"], correct: 1 },
    { q: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], correct: 2 },
    { q: "What is the largest organ in the human body?", options: ["Brain", "Heart", "Skin", "Liver"], correct: 2 },
    { q: "Which metal is liquid at room temperature?", options: ["Lead", "Mercury", "Tin", "Aluminum"], correct: 1 },
    { q: "What is the main component of natural gas?", options: ["Propane", "Ethane", "Methane", "Butane"], correct: 2 },
    { q: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Neptune", "Uranus"], correct: 1 },
    { q: "What is the unit of electrical resistance?", options: ["Volt", "Ampere", "Watt", "Ohm"], correct: 3 },
    { q: "Which galaxy is the Earth located in?", options: ["Andromeda", "Milky Way", "Sombrero", "Triangulum"], correct: 1 },
    { q: "What is the boiling point of water in Celsius?", options: ["90°C", "100°C", "110°C", "120°C"], correct: 1 },
    { q: "Which vitamin is produced when human skin is exposed to sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], correct: 3 },
    { q: "What is the center of an atom called?", options: ["Proton", "Neutron", "Nucleus", "Electron"], correct: 2 },
    { q: "Which planet is the hottest in our solar system?", options: ["Mercury", "Venus", "Mars", "Jupiter"], correct: 1 },
    { q: "What is the process by which plants make their food?", options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"], correct: 1 },
    { q: "Which gas is used in fire extinguishers to put out fires?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"], correct: 2 },
    { q: "What is the study of fossils called?", options: ["Biology", "Geology", "Paleontology", "Archaeology"], correct: 2 },
    { q: "How many planets are in our solar system?", options: ["7", "8", "9", "10"], correct: 1 },
    { q: "What is the common name for Sodium Chloride?", options: ["Sugar", "Salt", "Baking Soda", "Vinegar"], correct: 1 },
    { q: "Which part of the eye is responsible for color vision?", options: ["Retina", "Iris", "Cones", "Rods"], correct: 2 },
    { q: "What is the largest bird in the world?", options: ["Eagle", "Albatross", "Ostrich", "Penguin"], correct: 2 },
    { q: "Which element is needed for strong bones and teeth?", options: ["Iron", "Zinc", "Calcium", "Magnesium"], correct: 2 },
    { q: "What is the most common element in the universe?", options: ["Oxygen", "Carbon", "Hydrogen", "Helium"], correct: 2 },
    { q: "What is the name of the nearest star to Earth?", options: ["Sirius", "Alpha Centauri", "Proxima Centauri", "The Sun"], correct: 3 }
  ],
  'History': [
    { q: "Who is the founder of Pakistan?", options: ["Allama Iqbal", "Liaquat Ali Khan", "Quaid-e-Azam Muhammad Ali Jinnah", "Sir Syed Ahmed Khan"], correct: 2 },
    { q: "In which year did Pakistan gain independence?", options: ["1946", "1947", "1948", "1949"], correct: 1 },
    { q: "Who was the first Prime Minister of Pakistan?", options: ["Liaquat Ali Khan", "I.I. Chundrigar", "Feroz Khan Noon", "Khawaja Nazimuddin"], correct: 0 },
    { q: "When was the Pakistan Resolution passed?", options: ["23 March 1930", "23 March 1940", "14 August 1947", "23 March 1956"], correct: 1 },
    { q: "Who is the national poet of Pakistan?", options: ["Faiz Ahmed Faiz", "Mirza Ghalib", "Allama Iqbal", "Ahmed Faraz"], correct: 2 },
    { q: "In which year was the first constitution of Pakistan adopted?", options: ["1947", "1956", "1962", "1973"], correct: 1 },
    { q: "Which city was the first capital of Pakistan?", options: ["Lahore", "Islamabad", "Karachi", "Rawalpindi"], correct: 2 },
    { q: "Who was the first female Prime Minister of Pakistan?", options: ["Fatima Jinnah", "Benazir Bhutto", "Begum Rana Liaquat", "Hina Rabbani Khar"], correct: 1 },
    { q: "When did Pakistan become a nuclear power?", options: ["1997", "1998", "1999", "2000"], correct: 1 },
    { q: "Which movement led to the creation of Pakistan?", options: ["Khilafat Movement", "Aligarh Movement", "Pakistan Movement", "Quit India Movement"], correct: 2 },
    { q: "Who was the first President of Pakistan?", options: ["Iskander Mirza", "Ayub Khan", "Yahya Khan", "Zulfikar Ali Bhutto"], correct: 0 },
    { q: "When did the 1965 war between India and Pakistan break out?", options: ["August 6", "September 6", "October 6", "November 6"], correct: 1 },
    { q: "The Shimla Agreement was signed in which year?", options: ["1970", "1971", "1972", "1973"], correct: 2 },
    { q: "Who gave the idea of a separate state for Muslims in 1930?", options: ["Jinnah", "Iqbal", "Liaquat Ali", "Syed Ahmed Khan"], correct: 1 },
    { q: "What was the name of the first Pakistani satellite?", options: ["Badr-1", "Paksat-1", "Al-Badar", "Suroor"], correct: 0 },
    { q: "In which year did the East Pakistan separate from West Pakistan?", options: ["1969", "1970", "1971", "1972"], correct: 2 },
    { q: "Who wrote the national anthem of Pakistan?", options: ["Allama Iqbal", "Hafeez Jalandhari", "Faiz Ahmed Faiz", "Josh Malihabadi"], correct: 1 },
    { q: "When was the State Bank of Pakistan inaugurated?", options: ["1947", "1948", "1949", "1950"], correct: 1 },
    { q: "The Indus Waters Treaty was signed in which year?", options: ["1958", "1959", "1960", "1961"], correct: 2 },
    { q: "Who was the first Governor-General of Pakistan?", options: ["Liaquat Ali Khan", "Quaid-e-Azam", "Lord Mountbatten", "Iskander Mirza"], correct: 1 },
    { q: "When did Pakistan join the United Nations?", options: ["Sep 30, 1947", "Oct 30, 1947", "Nov 30, 1947", "Dec 30, 1947"], correct: 0 },
    { q: "What is the title of the biography of Jinnah by Hector Bolitho?", options: ["The Founder", "Jinnah of Pakistan", "Creator of Pakistan", "Jinnah: Creator of Pakistan"], correct: 3 },
    { q: "Who was the Prime Minister during the 1973 Constitution?", options: ["Yahya Khan", "Zulfikar Ali Bhutto", "Ayub Khan", "Iskander Mirza"], correct: 1 },
    { q: "In which year did Pakistan win its first Olympic Gold?", options: ["1956", "1960", "1964", "1968"], correct: 1 },
    { q: "Which king gave the name 'Pakistan'?", options: ["Choudhry Rahmat Ali", "Sir Syed", "Iqbal", "Jinnah"], correct: 0 },
    { q: "When PIA founded?", options: ["1947", "1950", "1955", "1960"], correct: 2 },
    { q: "The first census in Pakistan was held in?", options: ["1948", "1951", "1954", "1957"], correct: 1 },
    { q: "Who was the first commander-in-chief of Pakistan Army?", options: ["Frank Messervy", "Douglas Gracey", "Ayub Khan", "Yahya Khan"], correct: 0 },
    { q: "When did Pakistan become a Republic?", options: ["1947", "1950", "1956", "1973"], correct: 2 },
    { q: "The Objectives Resolution was passed in?", options: ["1947", "1948", "1949", "1950"], correct: 2 }
  ],
  'Sports': [
    { q: "What is the national sport of Pakistan?", options: ["Cricket", "Football", "Field Hockey", "Squash"], correct: 2 },
    { q: "In which year did Pakistan win the Cricket World Cup?", options: ["1987", "1992", "1996", "1999"], correct: 1 },
    { q: "Who was the captain of the Pakistan team that won the 1992 World Cup?", options: ["Javed Miandad", "Wasim Akram", "Imran Khan", "Inzamam-ul-Haq"], correct: 2 },
    { q: "How many times has Pakistan won the Hockey World Cup?", options: ["2", "3", "4", "5"], correct: 2 },
    { q: "Who is known as the 'King of Squash' from Pakistan?", options: ["Jahangir Khan", "Jansher Khan", "Hashim Khan", "Azam Khan"], correct: 0 },
    { q: "Which Pakistani cricketer is known as 'Rawalpindi Express'?", options: ["Waqar Younis", "Shoaib Akhtar", "Wasim Akram", "Mohammad Amir"], correct: 1 },
    { q: "In which year did Pakistan win the T20 Cricket World Cup?", options: ["2007", "2009", "2010", "2012"], correct: 1 },
    { q: "Who won the gold medal in javelin throw for Pakistan in 2024 Olympics?", options: ["Arshad Nadeem", "Talha Talib", "Shah Hussain Shah", "Inam Butt"], correct: 0 },
    { q: "Which Pakistani wrestler won a bronze medal in the 1960 Olympics?", options: ["Bashir Ahmad", "Zubair Ahmad", "Nasir Ahmad", "Rashid Ahmad"], correct: 0 },
    { q: "Who is the highest run-scorer for Pakistan in Test cricket?", options: ["Inzamam-ul-Haq", "Javed Miandad", "Younis Khan", "Mohammad Yousuf"], correct: 2 },
    { q: "Which Pakistani player won the British Open Squash 10 times in a row?", options: ["Jahangir Khan", "Jansher Khan", "Hashim Khan", "Azam Khan"], correct: 0 },
    { q: "How many Olympic Golds has Pakistan Hockey team won?", options: ["2", "3", "4", "5"], correct: 1 },
    { q: "Who is the fastest bowler to reach 100 ODI wickets for Pakistan?", options: ["Saqlain Mushtaq", "Wasim Akram", "Shaheen Afridi", "Shoaib Akhtar"], correct: 2 },
    { q: "Which Pakistani cricketer has the highest individual score in ODIs?", options: ["Saeed Anwar", "Fakhar Zaman", "Babar Azam", "Inzamam"], correct: 1 },
    { q: "In which year did Pakistan win the ICC Champions Trophy?", options: ["2015", "2016", "2017", "2018"], correct: 2 },
    { q: "Who was the first Pakistani player to take a hat-trick in Test cricket?", options: ["Wasim Akram", "Abdul Qadir", "Saqlain Mushtaq", "Jalal-ud-Din"], correct: 0 },
    { q: "Which sport is the trophy 'Quaid-e-Azam Trophy' associated with?", options: ["Hockey", "Football", "Cricket", "Squash"], correct: 2 },
    { q: "Who is the youngest ever Test cricketer from Pakistan?", options: ["Mushtaq Mohammad", "Aaqib Javed", "Hasan Raza", "Shahid Afridi"], correct: 2 },
    { q: "Which city is known as the sports capital of Pakistan?", options: ["Lahore", "Sialkot", "Karachi", "Faisalabad"], correct: 1 },
    { q: "How many times did Jahangir Khan stay unbeaten for 555 matches?", options: ["1", "2", "3", "4"], correct: 0 },
    { q: "Who was the captain of the Pakistan Cricket team in the 1999 World Cup final?", options: ["Wasim Akram", "Moin Khan", "Saeed Anwar", "Inzamam"], correct: 0 },
    { q: "Which Pakistani athlete won the first ever individual Olympic medal for the country?", options: ["Bashir Ahmad", "Hussain Shah", "Arshad Nadeem", "M. Ashiq"], correct: 0 },
    { q: "In which year did Pakistan win the Asian Games Hockey gold for the first time?", options: ["1954", "1958", "1962", "1966"], correct: 1 },
    { q: "Who holds the record for the most Test centuries for Pakistan?", options: ["Inzamam", "Younis Khan", "Javed Miandad", "Mohammad Yousuf"], correct: 1 },
    { q: "Which Pakistani boxer won a bronze medal in the 1988 Seoul Olympics?", options: ["Syed Hussain Shah", "Abrar Hussain", "Asghar Ali", "Ibrar Shah"], correct: 0 },
    { q: "Who is the current captain of Pakistan Men's Test Cricket team (2024)?", options: ["Babar Azam", "Shan Masood", "Shaheen Afridi", "Rizwan"], correct: 1 },
    { q: "Which Pakistani sportsperson is nicknamed 'The Great Wall'?", options: ["Jahangir Khan", "Samiullah", "Shahbaz Ahmed", "Hassan Sardar"], correct: 2 },
    { q: "In which year was the Pakistan Cricket Board (PCB) formed?", options: ["1947", "1948", "1949", "1950"], correct: 1 },
    { q: "Who is the only Pakistani to win the World Snooker Championship?", options: ["Mohammad Yousuf", "Saleh Mohammad", "Naveen Perwani", "Hamza Akbar"], correct: 0 },
    { q: "What is the seating capacity of Gaddafi Stadium Lahore?", options: ["20,000", "27,000", "35,000", "45,000"], correct: 1 }
  ],
  'Movies': [
    { q: "Who directed the movie 'Jaws'?", options: ["Martin Scorsese", "Steven Spielberg", "James Cameron", "George Lucas"], correct: 1 },
    { q: "Which movie won the first Oscar for Best Picture?", options: ["Wings", "Sunrise", "The Jazz Singer", "Metropolis"], correct: 0 },
    { q: "Who played the character Jack Sparrow?", options: ["Brad Pitt", "Johnny Depp", "Tom Cruise", "Will Smith"], correct: 1 },
    { q: "What is the highest-grossing movie of all time?", options: ["Endgame", "Avatar", "Titanic", "The Force Awakens"], correct: 1 },
    { q: "In which movie did Leonardo DiCaprio finally win an Oscar?", options: ["Titanic", "The Revenant", "Inception", "The Wolf of Wall Street"], correct: 1 },
    { q: "Which animated movie features a clownfish named Nemo?", options: ["Shark Tale", "Finding Nemo", "A Bug's Life", "Ice Age"], correct: 1 },
    { q: "Who is the 'King of Rock and Roll' in movies?", options: ["Elvis Presley", "Frank Sinatra", "Dean Martin", "James Dean"], correct: 0 },
    { q: "Which movie features the line 'I'll be back'?", options: ["Die Hard", "The Terminator", "Predator", "Rambo"], correct: 1 },
    { q: "What was the first feature-length animated movie?", options: ["Pinocchio", "Snow White", "Bambi", "Dumbo"], correct: 1 },
    { q: "Who directed 'Inception'?", options: ["Christopher Nolan", "Quentin Tarantino", "David Fincher", "Ridley Scott"], correct: 0 },
    { q: "Which movie series features a school for wizards named Hogwarts?", options: ["Lord of the Rings", "Harry Potter", "Narnia", "Percy Jackson"], correct: 1 },
    { q: "Who played the Joker in 'The Dark Knight'?", options: ["Jack Nicholson", "Heath Ledger", "Jared Leto", "Joaquin Phoenix"], correct: 1 },
    { q: "What is the name of the kingdom in 'Frozen'?", options: ["Arendelle", "Genovia", "Florin", "Westeros"], correct: 0 },
    { q: "Which actor plays Iron Man in the MCU?", options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"], correct: 2 },
    { q: "Who directed 'Pulp Fiction'?", options: ["Martin Scorsese", "Quentin Tarantino", "Steven Spielberg", "Francis Ford Coppola"], correct: 1 },
    { q: "In 'The Matrix', what color pill does Neo take?", options: ["Blue", "Red", "Green", "Yellow"], correct: 1 },
    { q: "What is the name of the hobbit played by Elijah Wood?", options: ["Samwise", "Frodo", "Merry", "Pippin"], correct: 1 },
    { q: "Which movie features the song 'My Heart Will Go On'?", options: ["Titanic", "The Bodyguard", "Lion King", "Dirty Dancing"], correct: 0 },
    { q: "Who voiced Woody in 'Toy Story'?", options: ["Tim Allen", "Tom Hanks", "Billy Crystal", "Jim Carrey"], correct: 1 },
    { q: "What is the name of the fictional city in 'Batman'?", options: ["Metropolis", "Gotham City", "Central City", "Star City"], correct: 1 },
    { q: "Which movie won the Oscar for Best Picture in 2020?", options: ["1917", "Joker", "Parasite", "The Irishman"], correct: 2 },
    { q: "Who is the director of 'The Godfather'?", options: ["Alfred Hitchcock", "Francis Ford Coppola", "Martin Scorsese", "Orson Welles"], correct: 1 },
    { q: "Which actor starred as 'The Terminator'?", options: ["Sylvester Stallone", "Arnold Schwarzenegger", "Bruce Willis", "Jean-Claude Van Damme"], correct: 1 },
    { q: "What is the name of the lion in 'The Lion King'?", options: ["Mufasa", "Simba", "Scar", "Timon"], correct: 1 },
    { q: "Which movie features a giant gorilla on top of the Empire State Building?", options: ["Godzilla", "King Kong", "Mighty Joe Young", "Rampage"], correct: 1 },
    { q: "Who directed 'Schindler's List'?", options: ["Steven Spielberg", "Ridley Scott", "James Cameron", "Clint Eastwood"], correct: 0 },
    { q: "In 'Star Wars', what is the name of Han Solo's ship?", options: ["Enterprise", "Millennium Falcon", "Discovery", "Serenity"], correct: 1 },
    { q: "Which actress played Katniss Everdeen in 'The Hunger Games'?", options: ["Emma Watson", "Jennifer Lawrence", "Scarlett Johansson", "Shailene Woodley"], correct: 1 },
    { q: "What is the name of the princess in 'Aladdin'?", options: ["Belle", "Jasmine", "Ariel", "Aurora"], correct: 1 },
    { q: "Which movie is about a theme park with cloned dinosaurs?", options: ["Jurassic Park", "King Kong", "Jumanji", "Night at the Museum"], correct: 0 }
  ],
  'Music': [
    { q: "Who is the 'King of Pop'?", options: ["Prince", "Michael Jackson", "Elvis Presley", "Justin Timberlake"], correct: 1 },
    { q: "Which band sang 'Hey Jude'?", options: ["The Rolling Stones", "The Beatles", "Led Zeppelin", "Queen"], correct: 1 },
    { q: "How many strings does a standard guitar have?", options: ["4", "5", "6", "12"], correct: 2 },
    { q: "Which composer wrote the 'Moonlight Sonata'?", options: ["Bach", "Mozart", "Beethoven", "Chopin"], correct: 2 },
    { q: "What is the best-selling album of all time?", options: ["Back in Black", "Thriller", "Dark Side of the Moon", "The Bodyguard"], correct: 1 },
    { q: "Who sang 'Rolling in the Deep'?", options: ["Adele", "Beyonce", "Rihanna", "Taylor Swift"], correct: 0 },
    { q: "Which city is known as the birthplace of Jazz?", options: ["Chicago", "New York", "New Orleans", "Memphis"], correct: 2 },
    { q: "What is the highest female singing voice?", options: ["Alto", "Mezzo-Soprano", "Soprano", "Contralto"], correct: 2 },
    { q: "Who is the lead singer of U2?", options: ["The Edge", "Bono", "Adam Clayton", "Larry Mullen"], correct: 1 },
    { q: "Which instrument did Jimi Hendrix play?", options: ["Drums", "Piano", "Guitar", "Bass"], correct: 2 },
    { q: "What is the name of the lead singer of Queen?", options: ["David Bowie", "Freddie Mercury", "Mick Jagger", "Robert Plant"], correct: 1 },
    { q: "How many members were in the Beatles?", options: ["3", "4", "5", "6"], correct: 1 },
    { q: "Which singer is known as 'The Queen of Soul'?", options: ["Tina Turner", "Whitney Houston", "Aretha Franklin", "Diana Ross"], correct: 2 },
    { q: "What is the name of Beyonce's fan base?", options: ["Swifties", "Beliebers", "BeyHive", "Barbz"], correct: 2 },
    { q: "Which artist released the album 'Lemonade'?", options: ["Rihanna", "Beyonce", "Adele", "SZA"], correct: 1 },
    { q: "What is the most streamed song on Spotify?", options: ["Shape of You", "Blinding Lights", "One Dance", "Someone You Loved"], correct: 1 },
    { q: "Which country is the band ABBA from?", options: ["Norway", "Denmark", "Sweden", "Finland"], correct: 2 },
    { q: "What is the real name of Lady Gaga?", options: ["Stefani Germanotta", "Robyn Fenty", "Katy Hudson", "Alecia Moore"], correct: 0 },
    { q: "Which instrument is Yo-Yo Ma famous for playing?", options: ["Violin", "Cello", "Piano", "Flute"], correct: 1 },
    { q: "Who wrote the opera 'The Marriage of Figaro'?", options: ["Verdi", "Wagner", "Mozart", "Puccini"], correct: 2 },
    { q: "What is the title of Elvis Presley's first gold record?", options: ["Hound Dog", "Heartbreak Hotel", "Blue Suede Shoes", "Love Me Tender"], correct: 1 },
    { q: "Which rap artist released the album 'The Marshall Mathers LP'?", options: ["Jay-Z", "Eminem", "Drake", "Kanye West"], correct: 1 },
    { q: "What is the name of the band with the hit 'Don't Stop Believin'?", options: ["Journey", "Boston", "Foreigner", "REO Speedwagon"], correct: 0 },
    { q: "Who is known as 'The Material Girl'?", options: ["Cher", "Madonna", "Cyndi Lauper", "Janet Jackson"], correct: 1 },
    { q: "Which musical features the songs 'Circle of Life' and 'Can You Feel the Love Tonight'?", options: ["Wicked", "Hamilton", "The Lion King", "Les Misérables"], correct: 2 },
    { q: "What is the name of the first album by Taylor Swift?", options: ["Fearless", "Taylor Swift", "Red", "1989"], correct: 1 },
    { q: "Which singer-songwriter wrote 'Bridge Over Troubled Water'?", options: ["Bob Dylan", "Paul Simon", "Neil Diamond", "James Taylor"], correct: 1 },
    { q: "What is the name of the lead singer of Coldplay?", options: ["Chris Martin", "Thom Yorke", "Matt Bellamy", "Guy Berryman"], correct: 0 },
    { q: "Which instrument did Miles Davis play?", options: ["Saxophone", "Trumpet", "Trombone", "Clarinet"], correct: 1 },
    { q: "What is the name of the 2023 world tour by Taylor Swift?", options: ["The Eras Tour", "Reputation Stadium Tour", "The 1989 World Tour", "Red Tour"], correct: 0 }
  ],
  'Art': [
    { q: "Who painted the 'Mona Lisa'?", options: ["Van Gogh", "Da Vinci", "Picasso", "Michelangelo"], correct: 1 },
    { q: "Which artist cut off his own ear?", options: ["Salvador Dali", "Vincent van Gogh", "Claude Monet", "Andy Warhol"], correct: 1 },
    { q: "Who painted the Sistine Chapel ceiling?", options: ["Raphael", "Donatello", "Michelangelo", "Bernini"], correct: 2 },
    { q: "What style is Pablo Picasso known for?", options: ["Impressionism", "Cubism", "Surrealism", "Realism"], correct: 1 },
    { q: "Which artist painted 'The Starry Night'?", options: ["Van Gogh", "Rembrandt", "Degas", "Kandinsky"], correct: 0 },
    { q: "Who is famous for his pop art featuring Campbell's soup cans?", options: ["Jackson Pollock", "Andy Warhol", "Roy Lichtenstein", "Keith Haring"], correct: 1 },
    { q: "Which country is the artist Frida Kahlo from?", options: ["Spain", "Mexico", "Argentina", "Colombia"], correct: 1 },
    { q: "What is the art of beautiful handwriting called?", options: ["Typography", "Graffiti", "Calligraphy", "Illustration"], correct: 2 },
    { q: "Which artist painted the 'Last Supper'?", options: ["Michelangelo", "Da Vinci", "Raphael", "Caravaggio"], correct: 1 },
    { q: "What is the primary color that is not red or blue?", options: ["Green", "Yellow", "Orange", "Purple"], correct: 1 },
    { q: "Who painted 'The Scream'?", options: ["Edvard Munch", "Gustav Klimt", "Henri Matisse", "Marc Chagall"], correct: 0 },
    { q: "Which artist is known for his melting clocks in paintings?", options: ["Picasso", "Dali", "Magritte", "Miró"], correct: 1 },
    { q: "What material is the Statue of David made of?", options: ["Bronze", "Marble", "Granite", "Plaster"], correct: 1 },
    { q: "Who is known as the father of modern architecture?", options: ["Frank Lloyd Wright", "Le Corbusier", "Mies van der Rohe", "Louis Sullivan"], correct: 3 },
    { q: "Which French artist is known for his water lily paintings?", options: ["Manet", "Monet", "Renoir", "Cézanne"], correct: 1 },
    { q: "What is the name of the famous street artist from Bristol?", options: ["Banksy", "Shepard Fairey", "Invader", "Stik"], correct: 0 },
    { q: "Who sculpted 'The Thinker'?", options: ["Rodin", "Canova", "Giacometti", "Moore"], correct: 0 },
    { q: "Which movement is Claude Monet associated with?", options: ["Realism", "Impressionism", "Expressionism", "Fauvism"], correct: 1 },
    { q: "What is the name of the technique using small dots of color?", options: ["Impasto", "Sfumato", "Pointillism", "Chiaroscuro"], correct: 2 },
    { q: "Who painted 'Girl with a Pearl Earring'?", options: ["Vermeer", "Rembrandt", "Hals", "Steen"], correct: 0 },
    { q: "In which city is the Louvre Museum located?", options: ["London", "Rome", "Paris", "Madrid"], correct: 2 },
    { q: "What is the term for a painting done on wet plaster?", options: ["Tempera", "Fresco", "Oil", "Acrylic"], correct: 1 },
    { q: "Which artist created the 'Campbell's Soup Cans'?", options: ["Warhol", "Pollock", "Rothko", "Johns"], correct: 0 },
    { q: "Who painted 'American Gothic'?", options: ["Grant Wood", "Edward Hopper", "Andrew Wyeth", "Norman Rockwell"], correct: 0 },
    { q: "What is the name of the famous museum in New York shaped like a spiral?", options: ["Met", "MoMA", "Guggenheim", "Whitney"], correct: 2 },
    { q: "Which artist is famous for his 'drip' paintings?", options: ["De Kooning", "Rothko", "Pollock", "Mondrian"], correct: 2 },
    { q: "What color is 'Ultramarine'?", options: ["Red", "Blue", "Green", "Yellow"], correct: 1 },
    { q: "Who painted the 'School of Athens'?", options: ["Leonardo", "Michelangelo", "Raphael", "Titian"], correct: 2 },
    { q: "Which artist painted 'The Birth of Venus'?", options: ["Botticelli", "Lippi", "Ghirlandaio", "Mantegna"], correct: 0 },
    { q: "What is the art movement characterized by dream-like imagery?", options: ["Dadaism", "Surrealism", "Futurism", "Cubism"], correct: 1 }
  ],
  'Geography': [
    { q: "What is the highest mountain peak in Pakistan?", options: ["Nanga Parbat", "K2", "Broad Peak", "Tirich Mir"], correct: 1 },
    { q: "Which is the longest river in Pakistan?", options: ["Indus River", "Jhelum River", "Chenab River", "Ravi River"], correct: 0 },
    { q: "What is the name of the large desert in Sindh?", options: ["Thal", "Cholistan", "Thar", "Kharan"], correct: 2 },
    { q: "Which province of Pakistan is the largest by area?", options: ["Punjab", "Sindh", "Balochistan", "KPK"], correct: 2 },
    { q: "Which city is known as the 'City of Lights'?", options: ["Lahore", "Islamabad", "Karachi", "Faisalabad"], correct: 2 },
    { q: "Pakistan shares its longest border with which country?", options: ["India", "Iran", "China", "Afghanistan"], correct: 3 },
    { q: "What is the capital city of Pakistan?", options: ["Karachi", "Islamabad", "Lahore", "Rawalpindi"], correct: 1 },
    { q: "Which port is the largest in Pakistan?", options: ["Gwadar Port", "Bin Qasim Port", "Karachi Port", "Pasni Port"], correct: 2 },
    { q: "Which pass connects Pakistan with China?", options: ["Khyber Pass", "Bolan Pass", "Khunjerab Pass", "Tochi Pass"], correct: 2 },
    { q: "Where is the world's second largest salt mine located in Pakistan?", options: ["Khewra", "Warcha", "Kalabagh", "Jatta"], correct: 0 },
    { q: "Which Pakistani city is famous for sports goods?", options: ["Gujrat", "Sialkot", "Lahore", "Sahiwal"], correct: 1 },
    { q: "The Kaghan Valley is located in which province?", options: ["KPK", "Punjab", "Sindh", "Balochistan"], correct: 0 },
    { q: "What is the name of the sea located to the south of Pakistan?", options: ["Red Sea", "Arabian Sea", "Dead Sea", "Caspian Sea"], correct: 1 },
    { q: "Which city is famous for its wooden furniture?", options: ["Chiniot", "Multan", "Peshawar", "Quetta"], correct: 0 },
    { q: "The Karakoram Highway connects Pakistan with which country?", options: ["India", "Iran", "China", "Afghanistan"], correct: 2 },
    { q: "Which is the highest plateau in Pakistan?", options: ["Deosai", "Potohar", "Balochistan", "Salt Range"], correct: 0 },
    { q: "Manchar Lake is the largest freshwater lake in Pakistan, located in?", options: ["Punjab", "Sindh", "KPK", "Balochistan"], correct: 1 },
    { q: "Which city is the administrative center of Gilgit-Baltistan?", options: ["Skardu", "Gilgit", "Hunza", "Diamer"], correct: 1 },
    { q: "The Salt Range is located between which two rivers?", options: ["Indus and Jhelum", "Jhelum and Chenab", "Chenab and Ravi", "Ravi and Sutlej"], correct: 0 },
    { q: "Which is the largest artificial lake in Pakistan?", options: ["Saif-ul-Malook", "Keenjhar", "Attabad", "Shangrila"], correct: 1 },
    { q: "What is the total area of Pakistan in sq km?", options: ["796,096", "881,913", "996,096", "776,096"], correct: 1 },
    { q: "Which Pakistani peak is also known as 'Killer Mountain'?", options: ["K2", "Nanga Parbat", "Rakaposhi", "Broad Peak"], correct: 1 },
    { q: "Where is the Gobi Desert located?", options: ["China/Mongolia", "Africa", "South America", "Australia"], correct: 0 },
    { q: "Which city is the capital of Punjab province?", options: ["Faisalabad", "Multan", "Lahore", "Gujranwala"], correct: 2 },
    { q: "What is the main cash crop of Pakistan?", options: ["Wheat", "Rice", "Cotton", "Sugar Cane"], correct: 2 },
    { q: "Which Pakistani city is known as 'Manchester of Pakistan'?", options: ["Karachi", "Faisalabad", "Lahore", "Sialkot"], correct: 1 },
    { q: "The Bolan Pass is located in which mountain range?", options: ["Himalayas", "Karakoram", "Hindu Kush", "Toba Kakar"], correct: 3 },
    { q: "Which is the smallest province of Pakistan by area?", options: ["KPK", "Punjab", "Sindh", "Balochistan"], correct: 0 },
    { q: "Attock Fort was built by?", options: ["Babar", "Humayun", "Akbar", "Shah Jahan"], correct: 2 },
    { q: "Which country is to the East of Pakistan?", options: ["Iran", "Afghanistan", "China", "India"], correct: 3 }
  ],
  'Technology': [
    { q: "Who is the co-founder of Microsoft?", options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Jeff Bezos"], correct: 1 },
    { q: "What does 'WWW' stand for?", options: ["World Wide Web", "World Wild Web", "Web Wide World", "World Web Wide"], correct: 0 },
    { q: "Which company created the iPhone?", options: ["Samsung", "Google", "Apple", "Microsoft"], correct: 2 },
    { q: "What is the brain of a computer?", options: ["RAM", "GPU", "CPU", "Hard Drive"], correct: 2 },
    { q: "What does 'URL' stand for?", options: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Road Locator", "Universal Road Link"], correct: 0 },
    { q: "Which social media platform was founded by Mark Zuckerberg?", options: ["Twitter", "Instagram", "Facebook", "TikTok"], correct: 2 },
    { q: "What is the main language used for web styling?", options: ["HTML", "JavaScript", "Python", "CSS"], correct: 3 },
    { q: "In tech, what does 'AI' stand for?", options: ["Advanced Intel", "Artificial Intelligence", "Auto Interface", "Applied Info"], correct: 1 },
    { q: "Which operating system is developed by Google?", options: ["Windows", "macOS", "Android", "iOS"], correct: 2 },
    { q: "What year was the first iPhone released?", options: ["2005", "2006", "2007", "2008"], correct: 2 },
    { q: "What does 'RAM' stand for?", options: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Remote Access Memory"], correct: 0 },
    { q: "Which company owns YouTube?", options: ["Facebook", "Microsoft", "Google", "Apple"], correct: 2 },
    { q: "What is the most popular programming language for AI?", options: ["Java", "C++", "Python", "JavaScript"], correct: 2 },
    { q: "Who founded Amazon?", options: ["Elon Musk", "Jeff Bezos", "Bill Gates", "Jack Ma"], correct: 1 },
    { q: "What does 'HTTP' stand for?", options: ["Hypertext Transfer Protocol", "Hyperlink Text Transfer Protocol", "High Transfer Text Protocol", "Hypertext Tech Protocol"], correct: 0 },
    { q: "Which company developed the Windows operating system?", options: ["Apple", "IBM", "Microsoft", "Intel"], correct: 2 },
    { q: "What is the name of the first computer ever made?", options: ["ENIAC", "UNIVAC", "Altair", "Apple I"], correct: 0 },
    { q: "Which device is used to connect a computer to the internet?", options: ["Monitor", "Mouse", "Modem", "Printer"], correct: 2 },
    { q: "What does 'USB' stand for?", options: ["Universal Serial Bus", "Universal Service Bus", "Unique Serial Bus", "User Service Bus"], correct: 0 },
    { q: "Who is the CEO of Tesla?", options: ["Tim Cook", "Elon Musk", "Satya Nadella", "Sundar Pichai"], correct: 1 },
    { q: "What is the largest search engine in the world?", options: ["Bing", "Yahoo", "Google", "DuckDuckGo"], correct: 2 },
    { q: "What does 'PDF' stand for?", options: ["Personal Document Format", "Portable Document Format", "Print Document Format", "Page Document Format"], correct: 1 },
    { q: "Which company makes the 'Galaxy' series of smartphones?", options: ["Apple", "Samsung", "Huawei", "Sony"], correct: 1 },
    { q: "What is the name of the assistant on Apple devices?", options: ["Alexa", "Google Assistant", "Siri", "Cortana"], correct: 2 },
    { q: "What does 'HTML' stand for?", options: ["Hypertext Markup Language", "Hyperlink Text Markup Language", "High Tech Markup Language", "Hypertext Main Language"], correct: 0 },
    { q: "Who is considered the father of the computer?", options: ["Alan Turing", "Charles Babbage", "Ada Lovelace", "John von Neumann"], correct: 1 },
    { q: "What is the name of the software that manages computer hardware?", options: ["Application", "Operating System", "Database", "Browser"], correct: 1 },
    { q: "Which symbol is used for an email address?", options: ["#", "$", "@", "&"], correct: 2 },
    { q: "What does 'WiFi' stand for?", options: ["Wireless Fidelity", "Wireless Find", "Wide Fidelity", "Wireless File"], correct: 0 },
    { q: "What is the main component of a smartphone screen?", options: ["Plastic", "Glass", "Metal", "Liquid Crystal"], correct: 3 }
  ]
};

export default function Home() {
  const [view, setView] = useState('hero'); // 'hero', 'categories', 'quiz', 'result', 'login', 'profile'
  const [selectedCat, setSelectedCat] = useState(null);
  const [currentQuizQuestions, setCurrentQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90);
  
  // Stats & Auth States
  const [playCount, setPlayCount] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  
  // Login UI States
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    // Load state from localStorage
    const savedPlayCount = localStorage.getItem('quiz_play_count');
    if (savedPlayCount) setPlayCount(parseInt(savedPlayCount));
    
    const savedTotalCorrect = localStorage.getItem('quiz_total_correct');
    if (savedTotalCorrect) setTotalCorrect(parseInt(savedTotalCorrect));

    const savedEmail = localStorage.getItem('quiz_user_email');
    if (savedEmail) setUserEmail(savedEmail);

    const savedLoggedIn = localStorage.getItem('quiz_is_logged_in');
    if (savedLoggedIn === 'true') setIsLoggedIn(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('quiz_play_count', playCount.toString());
    localStorage.setItem('quiz_total_correct', totalCorrect.toString());
    localStorage.setItem('quiz_user_email', userEmail);
    localStorage.setItem('quiz_is_logged_in', isLoggedIn.toString());
  }, [playCount, totalCorrect, isLoggedIn, userEmail]);

  useEffect(() => {
    let timer;
    if (view === 'quiz' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && view === 'quiz') {
      finishQuiz();
    }
    return () => clearInterval(timer);
  }, [view, timeLeft]);

  const categories = [
    { name: 'Science', icon: '⚛️', color: '#7c3aed' },
    { name: 'History', icon: '📜', color: '#b45309' },
    { name: 'Sports', icon: '🏆', color: '#ef4444' },
    { name: 'Movies', icon: '🎬', color: '#f97316' },
    { name: 'Music', icon: '🎧', color: '#ec4899' },
    { name: 'Art', icon: '🎨', color: '#8b5cf6' },
    { name: 'Geography', icon: '🌍', color: '#10b981' },
    { name: 'Technology', icon: '💻', color: '#06b6d4' },
  ];

  const startQuiz = (catIndex) => {
    if (playCount >= 2 && !isLoggedIn) {
      setView('login');
      return;
    }

    const catName = categories[catIndex].name;
    const allQuestions = [...allQuizzes[catName]];
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    
    setCurrentQuizQuestions(selected);
    setSelectedCat(catIndex);
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsAnswered(false);
    setSelectedOption(null);
    setTimeLeft(90);
    setView('quiz');
  };

  const handleOptionClick = (optionIndex) => {
    if (isAnswered) return;
    
    setSelectedOption(optionIndex);
    setIsAnswered(true);
    
    if (optionIndex === currentQuizQuestions[currentQuestionIndex].correct) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < 9) {
        setCurrentQuestionIndex(prev => prev + 1);
        setIsAnswered(false);
        setSelectedOption(null);
      } else {
        finishQuiz();
      }
    }, 1500);
  };

  const finishQuiz = () => {
    setView('result');
    setPlayCount(prev => prev + 1);
    setTotalCorrect(prev => prev + score);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setPasswordError('');

    // Validation
    if (loginForm.password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return;
    }

    if (loginForm.email && loginForm.password) {
      setIsLoggedIn(true);
      setUserEmail(loginForm.email);
      setView('categories');
      setLoginForm({ email: '', password: '' });
      setShowPassword(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
    setPlayCount(0);
    setTotalCorrect(0);
    localStorage.clear();
    setView('hero');
  };

  const getOptionClass = (index) => {
    if (!isAnswered) return '';
    const correctIndex = currentQuizQuestions[currentQuestionIndex].correct;
    if (index === correctIndex) return 'correct';
    if (index === selectedOption) return 'wrong';
    return '';
  };

  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (timeLeft / 90) * circumference;

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <a href="#" className="nav-logo" onClick={() => setView('hero')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary)"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.04-2.44 2.5 2.5 0 0 1 2-2.45V10.5A2.5 2.5 0 0 1 9.5 8 2.5 2.5 0 0 1 12 10.5V15a2.5 2.5 0 0 1 5 0v-4.5A2.5 2.5 0 0 1 14.5 8 2.5 2.5 0 0 1 12 10.5v-6A2.5 2.5 0 0 1 14.5 2 2.5 2.5 0 0 1 17 4.5V9a2.5 2.5 0 0 1 4.96-.44 2.5 2.5 0 0 1 2.04 2.44 2.5 2.5 0 0 1-2 2.45v4.5A2.5 2.5 0 0 1 19.5 21 2.5 2.5 0 0 1 17 18.5v-14A2.5 2.5 0 0 1 19.5 2 2.5 2.5 0 0 1 22 4.5"></path></svg>
          Quiz<span>Master</span>
        </a>
        <div className="nav-links">
          <a href="#" className="nav-link" onClick={() => setView('hero')}>Home</a>
          <a href="#" className="nav-link" onClick={() => setView('categories')}>Quizzes</a>
          {isLoggedIn ? (
             <a href="#" className="login-btn" onClick={() => setView('profile')} style={{ background: '#ecfdf5', color: '#059669', borderColor: '#059669' }}>Profile</a>
          ) : (
            <a href="#" className="login-btn" onClick={() => setView('login')}>Login</a>
          )}
        </div>
      </nav>

      {view === 'hero' && (
        <section className="hero">
          <h1>Test Your Knowledge, Challenge the World</h1>
          <p>Join millions of players in fun quizzes across science, history, sports, and more. Learn something new every day.</p>
          <button className="cta-btn" onClick={() => setView('categories')}>Get Started</button>
        </section>
      )}

      {view === 'categories' && (
        <section className="categories-view">
          <div className="view-header">
          
            <h1>Choose a Category</h1>
            <p>Pick a topic to start your quiz journey</p>
            {!isLoggedIn && (
              <span className="trial-tag">Trials Remaining: {Math.max(0, 2 - playCount)}</span>
            )}
          </div>
          <div className="categories-grid-landing">
            {categories.map((cat, i) => (
              <div key={i} className="cat-card-landing" onClick={() => startQuiz(i)}>
                <div className="cat-icon-landing" style={{ color: cat.color }}>{cat.icon}</div>
                <div className="cat-name-landing">{cat.name}</div>
                <div className="cat-desc-landing">10 Quizzes</div>
                <div className="start-btn-mini">Start Quiz</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {view === 'quiz' && (
        <section className="quiz-view">
          <div className="quiz-header">
            <span className="quiz-category-tag">{categories[selectedCat].name}</span>
            <div className={`timer-container ${timeLeft <= 15 ? 'urgent' : ''}`}>
              <svg className="timer-svg" viewBox="0 0 80 80">
                <circle className="timer-bg" cx="40" cy="40" r="35" />
                <circle className="timer-progress" cx="40" cy="40" r="35" style={{ strokeDasharray: circumference, strokeDashoffset: strokeDashoffset }} />
              </svg>
              <span className="timer-text">{timeLeft}</span>
            </div>
            <span className="question-count">Question {currentQuestionIndex + 1}/10</span>
          </div>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: `${(currentQuestionIndex + 1) * 10}%` }}></div>
          </div>
          <h2 className="question-text">{currentQuizQuestions[currentQuestionIndex]?.q}</h2>
          <div className="options-grid">
            {currentQuizQuestions[currentQuestionIndex]?.options.map((option, i) => (
              <button key={i} className={`option-btn ${getOptionClass(i)}`} onClick={() => handleOptionClick(i)} disabled={isAnswered}>
                <span className="option-letter">{['A', 'B', 'C', 'D'][i]}</span>
                {option}
              </button>
            ))}
          </div>
        </section>
      )}

      {view === 'result' && (
        <section className="quiz-view result-screen">
          <div className="result-icon">{score >= 7 ? '🎉' : '👏'}</div>
          <h2 className="result-title">{timeLeft === 0 ? "Time's Up!" : (score >= 7 ? 'Fantastic Job!' : 'Good Effort!')}</h2>
          <p className="score-display">You scored <span className="score-number">{score}/10</span></p>
          <div className="action-btns">
            <button className="cta-btn" onClick={() => setView('categories')}>Try Another</button>
            <button className="secondary-btn" onClick={() => startQuiz(selectedCat)}>Retake Quiz</button>
          </div>
        </section>
      )}

      {view === 'login' && (
        <section className="login-view">
          <div className="login-card">
            {playCount >= 2 && <span className="trial-tag">Trial Limit Reached</span>}
            <h2>Create Account</h2>
            <p>Please log in to track your progress and play unlimited quizzes!</p>
            <form className="login-form" onSubmit={handleLogin}>
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" className="login-input" placeholder="name@example.com" required value={loginForm.email} onChange={(e) => setLoginForm({...loginForm, email: e.target.value})} />
              </div>
              <div className="input-group">
                <label>Password</label>
                <div className="password-input-wrapper">
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    className="login-input" 
                    placeholder="Min 8 characters" 
                    required 
                    value={loginForm.password} 
                    onChange={(e) => setLoginForm({...loginForm, password: e.target.value})} 
                  />
                  <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 19c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    )}
                  </button>
                </div>
                {passwordError && <span className="error-msg">{passwordError}</span>}
              </div>
              <button type="submit" className="login-submit">Login & Continue</button>
            </form>
          </div>
        </section>
      )}

      {view === 'profile' && (
        <section className="profile-view">
          <div className="profile-header">
            <div className="profile-avatar">
              <img 
                src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${userEmail || 'guest'}&backgroundColor=f3f0ff`} 
                alt="Profile Avatar" 
              />
            </div>
            <div className="profile-info">
              <h1>{userEmail.split('@')[0]}</h1>
              <p>{userEmail}</p>
            </div>
          </div>
          
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-value">{playCount}</span>
              <span className="stat-label">Quizzes Played</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">{totalCorrect}</span>
              <span className="stat-label">Total Points</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">{playCount > 0 ? Math.round((totalCorrect / (playCount * 10)) * 100) : 0}%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>

          <div className="profile-actions">
            <button className="cta-btn" onClick={() => setView('categories')}>Play New Quiz</button>
            <button className="logout-btn" onClick={handleLogout}>Logout Account</button>
          </div>
        </section>
      )}
    </div>
  );
}