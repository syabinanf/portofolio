from rembg import remove
from PIL import Image
import sys

def remove_background(input_path, output_path):
    """
    Remove background from an image and save with transparent background.
    
    Args:
        input_path: Path to the input image
        output_path: Path to save the output image with transparent background
    """
    # Open the input image
    with Image.open(input_path) as input_image:
        print(f"Processing: {input_path}")
        
        # Remove background using rembg
        output = remove(input_image)
        
        # Convert to RGBA to ensure transparency support
        if output.mode != 'RGBA':
            output = output.convert('RGBA')
        
        # Save with transparency
        output.save(output_path, 'PNG')
        print(f"Background removed. Saved to: {output_path}")
        print(f"Image mode: {output.mode}")
        print(f"Image size: {output.size}")
        
        return True

if __name__ == "__main__":
    input_file = r"c:\Users\inapc\OneDrive\Documents\portofolio\portofolio\src\assets\ina_baru.jpeg"
    output_file = r"c:\Users\inapc\OneDrive\Documents\portofolio\portofolio\src\assets\ina_baru.png"
    
    try:
        remove_background(input_file, output_file)
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)
