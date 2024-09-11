from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse

class ChartDataTests(APITestCase):
    # Tests the candlestick_data view by making a GET request to the 
    # view's URL and checking the response status code and data structure.
    def test_candlestick_data(self):
        url = reverse('candlestick_data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('data', response.data)
        self.assertIsInstance(response.data['data'], list)
        self.assertGreater(len(response.data['data']), 0)

    # Tests the line_chart_data view similarly.
    def test_line_chart_data(self):
        url = reverse('line_chart_data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('labels', response.data)
        self.assertIn('data', response.data)
        self.assertIsInstance(response.data['labels'], list)
        self.assertIsInstance(response.data['data'], list)
        self.assertEqual(len(response.data['labels']), len(response.data['data']))

    # Tests the bar_chart_data view similarly.
    def test_bar_chart_data(self):
        url = reverse('bar_chart_data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('labels', response.data)
        self.assertIn('data', response.data)
        self.assertIsInstance(response.data['labels'], list)
        self.assertIsInstance(response.data['data'], list)
        self.assertEqual(len(response.data['labels']), len(response.data['data']))

    # Tests the pie_chart_data view similarly.
    def test_pie_chart_data(self):
        url = reverse('pie_chart_data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('labels', response.data)
        self.assertIn('data', response.data)
        self.assertIsInstance(response.data['labels'], list)
        self.assertIsInstance(response.data['data'], list)
        self.assertEqual(len(response.data['labels']), len(response.data['data']))