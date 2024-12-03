import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import mockData, { getEvents } from '../mock-data';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('User does not type in the number-of-events field', ({ given, when, then }) => {
        let AppComponent;
        given('I am a user,', () => {
            AppComponent = render(<App />);

        });

        when('I have not typed a number on number-of-events field', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

              await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
              });
        });

        then('I should see a list of 32 events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
              });
        });
    });

    test('User types a number in the number-of-events field', ({ given, when, then }) => {
        let AppComponent;
        given('I am a user,', () => {
            AppComponent = render(<App />);

        });

        when('I type a number on number-of-events field', async () => {
          const user = userEvent.setup();
          const allEvents = await mockData;
            const NumberOfEventComponent = render(<NumberOfEvents currentNOE={3} />)
            const showDetails = EventComponent.queryByText('Show details');
              await user.click(showDetails);
        });

        then('I should be able to see a list of events with the number I typed as the length', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(3);
              });  
        });
    });
 
});