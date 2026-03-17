// Map monument name → image + description

import hampi from "../assets/images/hampi.jpeg";
import tajmahal from "../assets/images/tajmahal.jpeg";
import jaisalmer from "../assets/images/jaisalmar.jpeg";
import brihadeeswarar from "../assets/images/tanjore.jpeg";
import liberty from "../assets/images/statue.jpeg";
import machu from "../assets/images/machu.jpeg";
import bagerhat from "../assets/images/ma.jpeg";
import moha from "../assets/images/moha.jpeg";

export const monumentInfo: Record<
  string,
  { image: string; description: string }
> = {
  "Hampi": {
    image: hampi,
    description:
      "A vast open-air museum of ruins, Hampi was once the magnificent capital of the Vijayanagara Empire, renowned for its grand temples, markets, and royal complexes carved into a dramatic boulder-strewn landscape."
  },

  "Taj Mahal": {
    image: tajmahal,
    description:
      "Built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this white marble mausoleum stands as one of the world’s greatest symbols of eternal love and Mughal architectural perfection."
  },

  "Jaisalmer Fort": {
    image: jaisalmer,
    description:
      "Rising like a golden mirage from the Thar Desert, Jaisalmer Fort is one of the world’s few living forts, bustling with homes, temples, and markets within its honey-colored sandstone walls."
  },

  "Brihadeeswarar Temple": {
    image: brihadeeswarar,
    description:
      "Commissioned by Raja Raja Chola I over a millennium ago, this UNESCO-listed temple is a pinnacle of Dravidian architecture, famed for its towering granite vimana and intricate sculptures."
  },

  "Statue of Liberty": {
    image: liberty,
    description:
      "Gifted by France to the United States, this colossal neoclassical statue stands as a global icon of freedom and democracy, welcoming millions of immigrants arriving by sea to New York Harbor."
  },

  "Machu Picchu": {
    image: machu,
    description:
      "Perched high in the Andes Mountains, this mysterious Inca citadel showcases advanced engineering, terraced agriculture, and breathtaking views, offering a glimpse into a lost ancient civilization."
  },

  "Bagerhat Mosque": {
    image: bagerhat,
    description:
      "Part of the historic Mosque City of Bagerhat in Bangladesh, this 15th-century structure is celebrated for its unique brick architecture, multiple domes, and blend of Islamic and regional design traditions."
  },

  "Mohenjo-daro": {
    image: moha,
    description:
      "One of the largest settlements of the ancient Indus Valley Civilization, Mohenjo-daro reveals sophisticated urban planning with grid streets, drainage systems, and monumental public structures dating back over 4,000 years."
  }
};