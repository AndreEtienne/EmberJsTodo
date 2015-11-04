import DS from "ember-data";

var Todo = export default DS.Model.extend({
   title: DS.attr('String'),
   isCompleted: DS.attr('boolean')
});


Todo.reopenClass({
  FIXTURES = [
         {
           id: 1,
           title: 'Learn Ember.js',
           isCompleted: true
         },
         {
           id: 2,
           title: '...',
           isCompleted: false
         },
         {
           id: 3,
           title: 'Profit!',
           isCompleted: false
         }
        ]
})
export default TODO;
