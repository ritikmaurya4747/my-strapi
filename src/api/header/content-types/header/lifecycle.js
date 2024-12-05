module.exports = {
    async beforeCreate(event) {
      const { data } = event.params;
      if (data.title) {
        // Title ko lowercase aur spaces ko hyphen mein convert karna
        data.URL = data.title.toLowerCase().replace(/ /g, '-');
      }
    },
  
    async beforeUpdate(event) {
      const { data } = event.params;
      if (data.title) {
        // Title ko lowercase aur spaces ko hyphen mein convert karna
        data.URL = data.title.toLowerCase().replace(/ /g, '-');
      }
    }
  };
  