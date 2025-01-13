const ChatResponse = ({ response }) => {
    if (!response) {
        return null;
    }

    const { candidates = [], usageMetadata = {} } = response;

    return (
        <div className="response container my-4">
            <div className="mainContent">
                <p className="header">Response</p>
                {candidates.map((candidate, index) => (
                    <div className="card mb-3" key={index}>
                        <div className="card-body overflow-y-auto">
                            <h5 className="card-subtitle mb-2 text-muted sticky">Candidate</h5>
                            <div>
                                {candidate.content?.parts?.[0]?.text
                                    ?.split(/(?<=\*\*)|(?<=\d+\))/g) // Splits text after "**" or "number)"
                                    .map((point) =>
                                        point
                                            .replace(/\*\*/g, "") // Remove "**"
                                            .trim()
                                    )
                                    .filter((item) => item) // Remove empty strings
                                    .map((point, idx) => (
                                        <p key={idx}>{point}</p> // Display as paragraphs instead of numbered list
                                    ))}
                            </div>
                            <h6>Citations:</h6>
                            <ul>
                                {candidate.citationMetadate?.citationSources?.length ? (
                                    candidate.citationMetadate.citationSources.map((source, idx) => (
                                        <li key={idx}>
                                            <a
                                                href={source.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {source.url}
                                            </a>{" "}
                                            (Indexes: {source.startIndex} - {source.endIndex})
                                        </li>
                                    ))
                                ) : (
                                    <li>No citations available</li>
                                )}
                            </ul>
                        </div>
                    </div>
                ))}

                <h4>Usage Metadata</h4>
                <p>Prompt Tokens: {usageMetadata.promptTokenCount ?? "N/A"}</p>
                <p>Response Tokens: {usageMetadata.candidatesTokenCount ?? "N/A"}</p>
                <p>Total Tokens: {usageMetadata.totalTokenCount ?? "N/A"}</p>
            </div>
        </div>
    );
};

export default ChatResponse;
