import React, { useState } from "react";
import AWS from "aws-sdk";

const ImageUploader = () => {
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState("");
    const [showPreview, setShowPreview] = useState(false);

    const S3_BUCKET = "recipe-image-storage-nishkarman";
    const REGION = "us-east-1";

    AWS.config.update({
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
    });

    const s3 = new AWS.S3({
        params: { Bucket: S3_BUCKET },
        region: REGION,
    });

    const uploadFile = (e) => {
        e.preventDefault();
        if (!file) return alert("Please select a file first!");

        const params = {
            Bucket: S3_BUCKET,
            Key: file.name,
            Body: file,
        };

        s3.putObject(params, (err) => {
            if (err) {
                console.error("Upload Error:", err);
                alert("Upload failed!");
            } else {
                const imageUrl = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${file.name}`;
                setUrl(imageUrl);
                setShowPreview(true);
                alert("✅ Image uploaded successfully!");
            }
        });
    };

    const formatSize = (size) => {
        if (!size) return "";
        const kb = size / 1024;
        return kb < 1024
            ? `${kb.toFixed(1)} KB`
            : `${(kb / 1024).toFixed(1)} MB`;
    };

    return (
        <div style={styles.wrapper}>
            <div style={styles.card}>
                <h2 style={styles.heading}>📤 Upload Your Recipe Image</h2>

                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={styles.input}
                />

                {file && (
                    <p style={styles.fileInfo}>
                        <strong>📁 {file.name}</strong> • {formatSize(file.size)}
                    </p>
                )}

                <button onClick={uploadFile} style={styles.button}>Upload</button>

                {showPreview && url && (
                    <div style={{ ...styles.preview, opacity: showPreview ? 1 : 0 }}>
                        <p style={styles.success}>✅ Uploaded Image:</p>
                        <img src={url} alt="Uploaded" style={styles.image} />
                    </div>
                )}
            </div>
        </div>
    );
};

const styles = {
    wrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fffaf0",
        minHeight: "100vh",
        padding: "30px",
    },
    card: {
        background: "#ffffff",
        padding: "30px 40px",
        borderRadius: "12px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        textAlign: "center",
        maxWidth: "500px",
        width: "100%",
    },
    heading: {
        fontSize: "1.8rem",
        marginBottom: "20px",
        color: "#ff6600",
    },
    input: {
        margin: "10px 0",
        fontSize: "1rem",
        padding: "10px",
        width: "100%",
        borderRadius: "6px",
        border: "1px solid #ccc",
    },
    button: {
        backgroundColor: "#28a745",
        color: "#fff",
        padding: "12px 24px",
        border: "none",
        borderRadius: "8px",
        fontSize: "1rem",
        cursor: "pointer",
        marginTop: "15px",
        transition: "background 0.3s",
    },
    success: {
        color: "green",
        marginTop: "25px",
        fontWeight: "bold",
    },
    fileInfo: {
        fontSize: "0.95rem",
        color: "#444",
        marginTop: "10px",
    },
    preview: {
        marginTop: "20px",
        transition: "opacity 0.6s ease-in-out",
    },
    image: {
        maxWidth: "100%",
        height: "auto",
        borderRadius: "8px",
        marginTop: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
};

export default ImageUploader;
