"use client";

import React, { useState, useEffect } from 'react';

/**
 * mishTee Delivery Mitra - Mobile Dashboard
 * Built with Next.js App Router (Client Component)
 * Features: Inline styling, Mobile-first constraints, Pulsing status indicator
 */

export default function DeliveryMitraDashboard() {
  const [isPulsing, setIsPulsing] = useState(true);

  // Animation logic for the "Agent Online" pulsing green dot
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing((prev) => !prev);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Design Tokens / Theme
  const theme = {
    orange: '#FF8C00',
    green: '#2ECC71',
    white: '#FFFFFF',
    background: '#F7F9FC',
    textDark: '#2C3E50',
    textLight: '#7F8C8D',
    shadow: '0 4px 12px rgba(0,0,0,0.1)',
  };

  return (
    <div style={{
      backgroundColor: theme.background,
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      margin: 0,
      padding: 0,
    }}>
      {/* Mobile-First Container (Max 500px) */}
      <div style={{
        width: '100%',
        maxWidth: '500px',
        minHeight: '100vh',
        backgroundColor: theme.white,
        display: 'flex',
        flexDirection: 'column',
        padding: '30px 20px',
        boxSizing: 'border-box',
        boxShadow: '0 0 20px rgba(0,0,0,0.05)',
      }}>
        
        {/* Logo and Header Section */}
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <img 
            src="https://raw.githubusercontent.com/sudhir-voleti/mishtee-magic/main/mishTee_logo.png" 
            alt="mishTee Logo"
            style={{ width: '80px', height: 'auto', marginBottom: '15px' }}
          />
          <h1 style={{ 
            color: theme.orange, 
            fontSize: '26px', 
            fontWeight: '800', 
            margin: '0',
            letterSpacing: '-0.5px'
          }}>
            mishTee Delivery Mitra
          </h1>
          
          {/* Pulsing Status Indicator */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginTop: '12px' 
          }}>
            <div style={{
              width: '10px',
              height: '10px',
              backgroundColor: theme.green,
              borderRadius: '50%',
              marginRight: '10px',
              opacity: isPulsing ? 1 : 0.4,
              transition: 'opacity 0.4s ease-in-out',
              boxShadow: isPulsing ? `0 0 10px ${theme.green}` : 'none'
            }} />
            <span style={{ 
              color: theme.textDark, 
              fontSize: '15px', 
              fontWeight: '600' 
            }}>
              Agent Online
            </span>
          </div>
        </header>

        {/* Task Card Section */}
        <main style={{ flex: 1 }}>
          <div style={{
            backgroundColor: theme.white,
            borderRadius: '20px',
            padding: '25px',
            boxShadow: theme.shadow,
            border: '1px solid #F0F0F0',
            marginBottom: '30px',
            position: 'relative'
          }}>
            <span style={{ 
              backgroundColor: '#FFF4E5', 
              color: theme.orange, 
              fontSize: '11px', 
              fontWeight: '700', 
              padding: '4px 10px', 
              borderRadius: '20px',
              textTransform: 'uppercase',
              display: 'inline-block',
              marginBottom: '15px'
            }}>
              Active Task
            </span>
            <h2 style={{ 
              color: theme.textDark, 
              fontSize: '22px', 
              margin: '0 0 10px 0',
              fontWeight:
