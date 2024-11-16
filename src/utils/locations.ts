export interface LocationStructure {
  states: {
    [key: string]: {
      cities: string[];
      directory_type: string[];
    };
  };
}

const directory_types = ['dealers', 'contractors', 'suppliers', 'manufacturers'];

const commonCities = ['Los_Angeles', 'San_Francisco', 'San_Diego', 'Sacramento', 'San_Jose'];

export const locations: LocationStructure = {
  states: {
    CA: {
      cities: commonCities,
      directory_type: directory_types
    }
  }
};