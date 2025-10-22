import { store } from '../../src/store';
import { RootState, AppDispatch } from '../../src/store';

describe('Store Configuration', () => {
  it('should create store with correct initial state', () => {
    const state = store.getState();
    
    expect(state).toHaveProperty('heroes');
    expect(state.heroes).toEqual({
      heroes: [],
      loading: false,
      error: null,
      searchTerm: '',
    });
  });

  it('should have correct RootState type', () => {
    const state: RootState = store.getState();
    
    expect(state).toHaveProperty('heroes');
    expect(state.heroes).toHaveProperty('heroes');
    expect(state.heroes).toHaveProperty('loading');
    expect(state.heroes).toHaveProperty('error');
    expect(state.heroes).toHaveProperty('searchTerm');
  });

  it('should have correct AppDispatch type', () => {
    const dispatch: AppDispatch = store.dispatch;
    
    expect(typeof dispatch).toBe('function');
  });

  it('should dispatch actions correctly', () => {
    const initialState = store.getState();
    
    // Dispatch an action to test the store works
    store.dispatch({ type: 'heroes/setSearchTerm', payload: 'test' });
    
    const newState = store.getState();
    expect(newState.heroes.searchTerm).toBe('test');
    expect(newState.heroes.heroes).toEqual(initialState.heroes.heroes);
  });

  it('should have middleware configured', () => {
    // Test that the store is properly configured with middleware
    const state = store.getState();
    expect(state).toBeDefined();
    
    // Test that we can dispatch actions (middleware working)
    expect(() => {
      store.dispatch({ type: 'heroes/clearError' });
    }).not.toThrow();
  });
});
