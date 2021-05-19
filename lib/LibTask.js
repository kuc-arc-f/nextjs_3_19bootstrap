// LibTask

//
export default {
  get_const: function(){
    return {
      DB_NAME: "task_idx_kuc_db",
      DB_VERSION: 12,
      DB_STORE: {
          tasks: '++id, title, content ,created_at',
      }
    }
  },
  add_init_data: async function(db, title, content){
    try {
      var item = {
        title: title,
        content: content,
        created_at: new Date(),
      }
//      console.log(item)
      await db.tasks.add( item )
    } catch (error) {
      console.error(error);
      throw new Error('Error , add_init_data');    
    }  
  },
  add_init_items: async function(db){
    try {
      for(var i=1; i < 4; i++){
        var item = {
          title: "title-" + String(i),
          content: "content-" + String(i),
        }
        await this.add_init_data(db, item.title, item.content);
      }
    } catch (error) {
      console.error(error);
      throw new Error('Error , add_init_items');    
    }  

  },


}
