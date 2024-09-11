# Next.js + Django REST Framework Chart Application

This project is a full-stack web application consisting of a **Next.js** frontend and a **Django REST Framework** backend. The frontend includes a basic dashboard displaying multiple charts, and the data for these charts is fetched from the Django API. The application uses **React Redux** for state management and **ApexCharts** for rendering charts, with **Tailwind CSS** for styling. 

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Backend (Django API)](#backend-django-api)
  - [Frontend (Next.js)](#frontend-nextjs)
- [Approach and Thought Process](#approach-and-thought-process)

## Project Overview

This project aims to display different types of charts (Line, Bar, Pie, Candlestick) in a Next.js dashboard. Data is fetched from a Django REST API, and cross-origin requests are managed using `django-cors-headers`.

## Technologies Used

### Frontend (Next.js)
- **Next.js**: React framework for server-side rendering and static site generation.
- **React Redux**: State management library for managing global state.
- **React ApexCharts**: A wrapper for **ApexCharts**, a charting library used to render interactive charts.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Jest** & **Testing Library**: Unit and integration testing tools for React components.

### Backend (Django)
- **Django**: Web framework used for building the backend API.
- **Django REST Framework (DRF)**: Used to create RESTful API endpoints.
- **django-cors-headers**: For handling CORS (Cross-Origin Resource Sharing) between the frontend and backend.

## Setup Instructions

### Backend (Django API)

1. **Clone the repository**:
```bash
   git clone git@github.com:Ononymous/nextjs-django-chart.git
   cd nextjs-django-chart/backend
```
2. **Optional:** Set up a virtual environment:
```bash
   python3 -m venv venv
   source venv/bin/activate
```
3. **Install dependencies**:
```bash
   pip3 install djangorestframework django-cors-headers
```
4. **Run Django migrations** for database:
```bash
   python3 manage.py migrate
```
5. **Start the Django server**:
```bash
   python3 manage.py runserver
```
Now the Django API should be running at `http://127.0.0.1:8000/`.

Try accessing `http://127.0.0.1:8000/api/bar-chart-data/` to see the data for the Bar chart.



### Frontend (Next.js)

1. **Navigate to the frontend directory**:
```bash
   cd ../frontend
```
2. Switch to node version 20:
```bash
   nvm use 20
```
3. **Install dependencies**:
```bash
   npm install
```
4. **Start the Next.js development server**:
```bash
   npm run dev
```

### Testing

Unfortunatly, I was not able to write tests for the frontend components due to public library issues.

More specifically, the `react-apexcharts` library seems to have issues with "cleanup" after mounting the component in the test environment. This has been a known issue for a while, and there are open GitHub issues discussing this problem.

https://github.com/testing-library/react-testing-library/issues/1116

https://github.com/apexcharts/react-apexcharts/issues/427

However, I have written tests for the backend API. To run the tests, navigate to the `backend` directory and run:
```bash
python3 manage.py test
```

## Approach and Thought Process
### Charting Library
Initially, I planned to use react-chartjs-2, a popular wrapper for Chart.js, to render the charts. However, due to the unavailability of proper documentation at the time, I decided to switch to React ApexCharts, which is a wrapper for ApexCharts, a flexible and modern charting library.

### State Management
The chart data fetched from the Django backend is managed using React Redux. By utilizing Redux, the fetching of chart data is centralized in Redux slices, making it easy to call the fetch actions when necessary. This approach allows for easier scalability and separation of concerns between data fetching, state management, and rendering logic.

### CSS Framework
For styling, Tailwind CSS was chosen due to its utility-first approach. This allowed for fast development of responsive and clean UI components without writing custom CSS files. This is also crucial for flexing the layout of the dashboard and charts when the window size changes.

### CORS Handling
To handle cross-origin requests between the frontend and backend, I used the django-cors-headers library in Django. This allowed the Next.js frontend running on localhost:3000 to communicate with the Django backend running on localhost:8000 without any CORS issues.

### Testing
For unit and integration testing, I utilized Jest and React Testing Library. These tools ensure that both the individual React components and the overall application logic behave as expected.
As for Django, I used the built-in Django test framework to write tests for the API endpoints.

## Conclusion
This project demonstrates how to integrate a React-based frontend with a Django backend, managing state using Redux and rendering interactive charts with ApexCharts. The flexibility of Next.js with server-side rendering combined with Django's API capabilities makes for a scalable full-stack application.