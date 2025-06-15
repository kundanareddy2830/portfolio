# Create a temporary directory for downloads
$tempDir = "temp_images"
New-Item -ItemType Directory -Force -Path $tempDir

# Define image URLs for each project
$images = @{
    "movie-recommender.jpg" = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=600&fit=crop"
    "object-detection.jpg" = "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop"
    "quiz-app.jpg" = "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=600&fit=crop"
    "chess-game.jpg" = "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=800&h=600&fit=crop"
    "simon-says.jpg" = "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&h=600&fit=crop"
    "spotify-ui.jpg" = "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop"
    "playlist.jpg" = "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop"
    "chat-app.jpg" = "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop"
    "learning-app.jpg" = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
}

# Download each image
foreach ($image in $images.GetEnumerator()) {
    $outputPath = Join-Path $tempDir $image.Key
    Write-Host "Downloading $($image.Key)..."
    Invoke-WebRequest -Uri $image.Value -OutFile $outputPath
}

# Move images to the projects directory
Move-Item -Path "$tempDir\*" -Destination "." -Force

# Clean up temporary directory
Remove-Item -Path $tempDir -Recurse -Force

Write-Host "All images have been downloaded and placed in the projects directory." 