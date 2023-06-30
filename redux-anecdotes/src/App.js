import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createAnecdote, voteAnecdote, initializeAnecdotes } from './reducers/anecdoteReducer';
import { setFilter } from './reducers/filterReducer';
import { setNotification, clearNotification } from './reducers/notificationReducer';
import Notification from './components/Notification';
import Filter from './components/Filter'; 

const App = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);

  const handleVote = (id) => {
    dispatch(voteAnecdote(id));
    const votedAnecdote = anecdotes.find((anecdote) => anecdote.id === id);
    dispatch(setNotification(`You voted for '${votedAnecdote.content}'`));
    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
  };

  const handleCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    dispatch(createAnecdote(content));
    dispatch(setNotification(`You created a new anecdote: '${content}'`));
    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
  };

  const filteredAnecdotes = anecdotes.filter((anecdote) =>
  anecdote.content.toLowerCase().includes(filter?.toLowerCase() ?? '')
);


  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter /> {/* Include the Filter component */}
      {filteredAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            Votes: {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>Vote</button>
          </div>
        </div>
      ))}
      <h2>Create New Anecdote</h2>
      <form onSubmit={handleCreate}>
        <div>
          <input type="text" name="anecdote" />
        </div>
        <button type="submit">Create</button>
      </form>
      <Notification />
    </div>
  );
};

export default App;








