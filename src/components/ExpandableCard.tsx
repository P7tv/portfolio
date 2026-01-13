"use client";

import { useState, useRef, useEffect } from "react";

interface ExpandableCardProps {
    title: string;
    children: React.ReactNode;
}

export default function ExpandableCard({ title, children }: ExpandableCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            if (contentRef.current.scrollHeight > 180) {
                setShowButton(true);
            }
        }
    }, [children]);

    const toggleExpand = () => {
        if (isExpanded && cardRef.current) {
            const cardTop = cardRef.current.getBoundingClientRect().top + window.scrollY;
            if (window.scrollY > cardTop) {
                window.scrollTo({ top: cardTop - 100, behavior: 'smooth' });
            }
        }
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="card expandable-card" ref={cardRef}>
            <h3 className="card-title">{title}</h3>
            <div
                className={`card-content ${isExpanded ? "expanded" : "collapsed"}`}
                ref={contentRef}
                style={{
                    maxHeight: isExpanded
                        ? `${contentRef.current?.scrollHeight || 1000}px`
                        : '180px'
                }}
            >
                {children}
            </div>

            {showButton && (
                <div className="read-more-wrapper">
                    <button
                        className={`read-more-btn ${isExpanded ? 'expanded-btn' : ''}`}
                        onClick={toggleExpand}
                    >
                        <span className="btn-text">{isExpanded ? "ย่อเก็บ" : "อ่านต่อ"}</span>
                        <span className="chevron">▼</span>
                    </button>
                </div>
            )}

            <style jsx>{`
        .expandable-card {
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: visible; 
        }
        .card-content {
            overflow: hidden;
            transition: max-height 0.5s ease-in-out;
            position: relative;
        }
         /* Note: max-height is handled inline for smoother animation */
        .collapsed {
            mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
            -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
        }
        .expanded {
            mask-image: none;
            -webkit-mask-image: none;
        }
        
        .read-more-wrapper {
            display: flex;
            justify-content: center;
            margin-top: -1rem;
            position: relative;
            z-index: 10;
            padding-bottom: 0.5rem;
        }

        .read-more-btn {
            background-color: var(--bg-surface);
            border: 1px solid var(--border);
            color: var(--primary);
            cursor: pointer;
            font-size: 0.85rem;
            padding: 0.4rem 1.2rem;
            border-radius: 2rem;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            box-shadow: var(--shadow-sm);
        }

        .read-more-btn:hover {
            background-color: var(--primary);
            color: white;
            border-color: var(--primary);
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }
        
        .expanded-btn .chevron {
            transform: rotate(180deg);
        }
        
        .chevron {
            font-size: 0.7rem;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
        </div>
    );
}
