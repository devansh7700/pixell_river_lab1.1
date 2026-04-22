# Pixell River Employee Directory

## 1.Change you made

I also refactored the use of TanStack Query to replace manual data fetching that was being used to fetch employee data through the useEffect and useState hooks. The given change enhances the process of handling server-side data and decreases the repetition of code in the program.

## 2. Tools used

To control server state I relied on TanStack Query (React Query). This library makes API calls simpler, as they automatically perform caching, background fetching, and synchronization, eliminating any manual state management.

## 3. User experience impact

Data are now stored as caches therefore making users have a faster loading time. The interface also automatically updates with the addition of new employees without the need to refresh the page. Error states and loading are dealt with in a better way.

## 4. Your understanding

The lab made me realize what is meant by client state and server state. I got to know that such tools as React Query allow making the applications more scalable and effective in asynchronous data management, as well as in the minimization of the complexity within the components.
