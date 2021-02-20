# **Tarea1-Cloud Computing**

### **Rest API that supports 5 get and 5 post methods**

This project includes 5 get methods that use the poke api and 5 post methods that make use of cluster of APIs known as API toys.

## **Requirements**

-  Node.js must be installed on your machine
-  Clone this repo to your machine and run 'npm install' to install all the required dependencies


## **Documentation**

#### The documentation shows all the necesary information for you to make use of this simple API <p>

#### Once you have everything setup, you can run the code and connect to it using `http://localhost:3000/` plus the additional routes depending on what you'd like to do.  All responses will return data in `json` format.

# **GET Methods**

### The GET methods implemented into this API allow you to get information about various aspects of the pokemon universe such as:

- Different pokemons as well as their stats
- Berrys as well as their characteristics
- Items that you can equip to your pokes
- Locations in the pokemon universe
- Powerful moves that you can teach to your pokemon team!


## **Pokemons**

```
GET http://localhost:3000/poke/  <= the name of the pokemon you'd like to search
```

### Due to how long the JSON response is for this request, I decided to skip it for the documentation. It was more than a thousand lines!!

### **Example!**

### Try looking for Pikachu's info. Your request should look like this

```
http://localhost:3000/poke/Pikachu
```

---

## **Berrys**

```
GET http://localhost:3000/berry/  <= the name of the berry you'd like to search
```

### **RESPONSE BODY**

```
{
  "firmness": {
    "name": "soft",
    "url": "https://pokeapi.co/api/v2/berry-firmness/2/"
  },
  "flavors": [
    {
      "flavor": {
        "name": "spicy",
        "url": "https://pokeapi.co/api/v2/berry-flavor/1/"
      },
      "potency": 10
    },
    {
      "flavor": {
        "name": "dry",
        "url": "https://pokeapi.co/api/v2/berry-flavor/2/"
      },
      "potency": 0
    },
    {
      "flavor": {
        "name": "sweet",
        "url": "https://pokeapi.co/api/v2/berry-flavor/3/"
      },
      "potency": 0
    },
    {
      "flavor": {
        "name": "bitter",
        "url": "https://pokeapi.co/api/v2/berry-flavor/4/"
      },
      "potency": 0
    },
    {
      "flavor": {
        "name": "sour",
        "url": "https://pokeapi.co/api/v2/berry-flavor/5/"
      },
      "potency": 0
    }
  ],
  "growth_time": 3,
  "id": 1,
  "item": {
    "name": "cheri-berry",
    "url": "https://pokeapi.co/api/v2/item/126/"
  },
  "max_harvest": 5,
  "name": "cheri",
  "natural_gift_power": 60,
  "natural_gift_type": {
    "name": "fire",
    "url": "https://pokeapi.co/api/v2/type/10/"
  },
  "size": 20,
  "smoothness": 25,
  "soil_dryness": 15
}
```

### **Example!**

### Try looking for a tasty berry like the cheri type. Your request should look like this

```
http://localhost:3000/berry/cheri
```

---


## **Items**

```
GET http://localhost:3000/item/  <= the name of the item you'd like to search
```

### **RESPONSE BODY**

```
{
  "id": 1,
  "name": "master-ball",
  "cost": 0,
  "fling_power": 10,
  "fling_effect": {
    "name": "flinch",
    "url": "https://pokeapi.co/api/v2/item-fling-effect/7/"
  },
  "attributes": [
    {
      "name": "holdable",
      "url": "https://pokeapi.co/api/v2/item-attribute/5/"
    }
  ],
  "category": {
    "name": "standard-balls",
    "url": "https://pokeapi.co/api/v2/item-category/34/"
  },
  "effect_entries": [
    {
      "effect": "Used in battle\n:   [Catches]{mechanic:catch} a wild Pokémon without fail.\n\n    If used in a trainer battle, nothing happens and the ball is lost.",
      "short_effect": "Catches a wild Pokémon every time.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "flavor_text_entries": [
    {
      "text": "The best Poké Ball with the ultimate level of performance. With it, you will catch any wild Pokémon without fail.",
      "version_group": {
        "name": "x-y",
        "url": "https://pokeapi.co/api/v2/version-group/15/"
      },
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "game_indices": [
    {
      "game_index": 1,
      "generation": {
        "name": "generation-vi",
        "url": "https://pokeapi.co/api/v2/generation/6/"
      }
    }
  ],
  "names": [
    {
      "name": "Master Ball",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "sprites": {
    "default": "http://pokeapi.co/media/sprites/items/master-ball.png"
  },
  "held_by_pokemon": [
    {
      "pokemon": {
        "name": "chansey",
        "url": "https://pokeapi.co/api/v2/pokemon/113/"
      },
      "version_details": [
        {
          "rarity": 50,
          "version": {
            "name": "soulsilver",
            "url": "https://pokeapi.co/api/v2/version/16/"
          }
        }
      ]
    }
  ],
  "baby_trigger_for": {
    "url": "https://pokeapi.co/api/v2/evolution-chain/1/"
  }
}
```

### **Example!**

### Try looking for a rare and powerful object, like a master ball! Your request should look like this

```
http://localhost:3000/item/master-ball
```

---


## **Location**

```
GET http://localhost:3000/location/  <= the name of the item you'd like to search
```

### **RESPONSE BODY**

```
{
  "areas": [
    {
      "name": "canalave-city-area",
      "url": "https://pokeapi.co/api/v2/location-area/1/"
    }
  ],
  "game_indices": [
    {
      "game_index": 7,
      "generation": {
        "name": "generation-iv",
        "url": "https://pokeapi.co/api/v2/generation/4/"
      }
    }
  ],
  "id": 1,
  "name": "canalave-city",
  "names": [
    {
      "language": {
        "name": "fr",
        "url": "https://pokeapi.co/api/v2/language/5/"
      },
      "name": "Joliberges"
    },
    {
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "name": "Canalave City"
    }
  ],
  "region": {
    "name": "sinnoh",
    "url": "https://pokeapi.co/api/v2/region/4/"
  }
}
```

### **Example!**

### Try looking for a creepy and eerie place, like a Lavender Town! Your request should look like this

```
http://localhost:3000/location/lavender-town
```

---



## **Moves**

```
GET http://localhost:3000/move/  <= the name of the item you'd like to search
```

### **RESPONSE BODY**

```
{
  "id": 1,
  "name": "pound",
  "accuracy": 100,
  "effect_chance": null,
  "pp": 35,
  "priority": 0,
  "power": 40,
  "contest_combos": {
    "normal": {
      "use_before": [
        {
          "name": "double-slap",
          "url": "https://pokeapi.co/api/v2/move/3/"
        },
        {
          "name": "headbutt",
          "url": "https://pokeapi.co/api/v2/move/29/"
        },
        {
          "name": "feint-attack",
          "url": "https://pokeapi.co/api/v2/move/185/"
        }
      ],
      "use_after": null
    },
    "super": {
      "use_before": null,
      "use_after": null
    }
  },
  "contest_type": {
    "name": "tough",
    "url": "https://pokeapi.co/api/v2/contest-type/5/"
  },
  "contest_effect": {
    "url": "https://pokeapi.co/api/v2/contest-effect/1/"
  },
  "damage_class": {
    "name": "physical",
    "url": "https://pokeapi.co/api/v2/move-damage-class/2/"
  },
  "effect_entries": [
    {
      "effect": "Inflicts [regular damage]{mechanic:regular-damage}.",
      "short_effect": "Inflicts regular damage with no additional effect.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "effect_changes": [],
  "generation": {
    "name": "generation-i",
    "url": "https://pokeapi.co/api/v2/generation/1/"
  },
  "meta": {
    "ailment": {
      "name": "none",
      "url": "https://pokeapi.co/api/v2/move-ailment/0/"
    },
    "category": {
      "name": "damage",
      "url": "https://pokeapi.co/api/v2/move-category/0/"
    },
    "min_hits": null,
    "max_hits": null,
    "min_turns": null,
    "max_turns": null,
    "drain": 0,
    "healing": 0,
    "crit_rate": 0,
    "ailment_chance": 0,
    "flinch_chance": 0,
    "stat_chance": 0
  },
  "names": [
    {
      "name": "Pound",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "past_values": [],
  "stat_changes": [],
  "super_contest_effect": {
    "url": "https://pokeapi.co/api/v2/super-contest-effect/5/"
  },
  "target": {
    "name": "selected-pokemon",
    "url": "https://pokeapi.co/api/v2/move-target/10/"
  },
  "type": {
    "name": "normal",
    "url": "https://pokeapi.co/api/v2/type/1/"
  },
  "flavor_text_entries": [
    {
      "flavor_text": "Pounds with fore­\nlegs or tail.",
      "language": {
        "url": "https://pokeapi.co/api/v2/language/9/",
        "name": "en"
      },
      "version_group": {
        "url": "https://pokeapi.co/api/v2/version-group/3/",
        "name": "gold-silver"
      }
    }
  ]
}
```

### **Example!**

### Try looking the move Tail Whip! Your request should look like this

```
http://localhost:3000/move/tail-whip
```


---

# **POST Methods**

### While using a POST you can send the body request with [Postman](https://www.postman.com/) using the format for each request.

<p>

### Check Words

### **REQUEST URL**

```
http://localhost:3000/check-words
```

### **REQUEST BODY:**

```
{
    "text" : "abcdeftyu"
}
```

#### `text` `string` The 9 characters tht you send to the API. It returns the words that can be formed out of the provided characters.


### **RESPONSE BODY**

```
{
    "letters": [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "T",
        "Y",
        "U"
    ],
    "sorted": "ABCDEFTUY",
    "found": [
        "FUTE",
        "FUYE",
        "YUFT"
    ],
    "best_length": 4,
    "best_words": [
        "FUTE",
        "FUYE",
        "YUFT"
    ],
    "cached": true,
    "time_taken": 0.2410569190979
}
```

---

### Check Words

### **REQUEST URL**

```
http://localhost:3000/dice-roll
```

### **REQUEST BODY:**

```
{
    "sides": "20"
}
```

#### `sides` `string` Is the number of sides for the dice that will be rolled. The limit is 20.


### **RESPONSE BODY**

```
{
    "dice": "d20",
    "rolls": [
        11
    ]
}
```

---

### Dictionary

### **REQUEST URL**

```
http://localhost:3000/dictionary
```

### **REQUEST BODY:**

```
{
    "text" : "Valerian"
}
```

#### `text` `string` The word that will be checked for in the dictionary


### **RESPONSE BODY**

```
{
    "found": false
}
```

---
### Guild Wars

### **REQUEST URL**

```
http://localhost:3000/guild-wars
```

### **REQUEST BODY:**

```
{
    "specie": "Human"
}
```

#### `specie` `string` The specie that the API will use to generate a random character from guild wars 2. Values: "human", "charr", "asura", "norn", "sylvari".


### **RESPONSE BODY**

```
{
    "species": "sylvari",
    "gender": "male",
    "names": [
        "Joachim",
        "Ambroise",
        "Catullus",
        "Montrose",
        "Dhurjati",
        "Sinha",
        "Hafez",
        "Alcaeus",
        "Khalsa",
        "Bathanti"
    ],
    "age": 2,
    "class": "mesmer",
    "mastery": "",
    "professions": [
        "Tailor",
        "Leatherworker",
        "Chef",
        "Scribe"
    ],
    "body": {
        "height": "Tall",
        "shape": "Stocky"
    },
    "starting_gear": "harlequin's smile",
    "personality": "charm",
    "personal_story": {
        "stage1": "the white stag",
        "stage2": "act with wisdom, but act",
        "stage3": "cycle of night"
    },
    "order": "durmand priory"
}
```

---

### Time Zones

### **REQUEST URL**

```
http://localhost:3000/time-zone
```

### **REQUEST BODY:**

```
{
    "time": "EST"
}
```

#### `time` `string` The time zone that will be used for the calculation. API wil return a time offset based on the input.


### **RESPONSE BODY**

```
{
    "timestamp": 1613775064,
    "offset": -18000,
    "name": "America%2FNew_York"
}
```

---