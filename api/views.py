from rest_framework.response import Response
from rest_framework.decorators import api_view

# The following views return dummy data for the different chart types.

# The candlestick_data view returns a list of dictionaries, each containing
# data for a single candlestick in a candlestick chart.
@api_view(['GET'])
def candlestick_data(request):
    data = {
        "data": [
            {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
            {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
            # Add more entries here...
        ]
    }
    return Response(data)

# The line_chart_data view returns a dictionary with two keys: "labels" and "data".
@api_view(['GET'])
def line_chart_data(request):
    data = {
        "labels": ["Jan", "Feb", "Mar", "Apr"],
        "data": [10, 20, 30, 40]
    }
    return Response(data)

# The bar_chart_data view returns a dictionary with two keys: "labels" and "data".
@api_view(['GET'])
def bar_chart_data(request):
    data = {
        "labels": ["Product A", "Product B", "Product C"],
        "data": [100, 150, 200]
    }
    return Response(data)

# The pie_chart_data view returns a dictionary with two keys: "labels" and "data".
@api_view(['GET'])
def pie_chart_data(request):
    data = {
        "labels": ["Red", "Blue", "Yellow"],
        "data": [300, 50, 100]
    }
    return Response(data)
