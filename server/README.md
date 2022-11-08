
# Video TV - API

The Backend of Video TV is a REST API. The assets are being stored in cloudinary and then the link is stored in mongoDB.

### Tech Used
- NodeJS ( JavaScript Engine )
- Express
- Mongoose ( A MongoDB Atlas )
- Cloudinary ( Cloud Storage )


### API Reference

#### Get all Videos

```http
  GET /videos/
```

This endpoint gives all the videos.

#### Get a single video

```http
  GET /videos/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

This endpoint gives a single video based on the ID.

#### Upload a video


```http
  POST /videos/
```

The Body of the request needs following information.

| attribute | value    | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`   | `string` | **Required**. Title of the video |
| `description`   | `string` | **Required**. Description of the video |
| `thumbnailUrl`   | `string` | **Required**. asset link for thumbnail |
| `videoUrl`   | `string` | **Required**. asset link for the video |

This endpoint uploads a video to the server.

