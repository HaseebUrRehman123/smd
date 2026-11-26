import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProductCard from './components/ProductCard';

const PRODUCTS = [
  {
    id: 'aurora',
    name: 'Aurora Headphones',
    category: 'Audio',
    icon: '🎧',
    tint: '#0e7490',
    price: 149,
    rating: 4.7,
    description: 'Immersive sound, all-day comfort, and a battery that keeps up with you.',
  },
  {
    id: 'pulse',
    name: 'Pulse Watch',
    category: 'Wearables',
    icon: '⌚',
    tint: '#6d28d9',
    price: 199,
    rating: 4.4,
    description: 'Track workouts, sleep, and heart rate with a bright always-on display.',
  },
  {
    id: 'echo',
    name: 'Echo Mini Speaker',
    category: 'Audio',
    icon: '🔊',
    tint: '#b45309',
    price: 79,
    rating: 4.2,
    description: 'Pocket-sized, waterproof, and surprisingly loud for its size.',
  },
  {
    id: 'glow',
    name: 'Glow Desk Lamp',
    category: 'Home',
    icon: '💡',
    tint: '#047857',
    price: 59,
    rating: 4.8,
    description: 'Warm-to-cool light with a touch dimmer and a built-in USB-C charger.',
  },
];

const CATEGORIES = ['All', ...new Set(PRODUCTS.map((p) => p.category))];

export default function App() {
  const [category, setCategory] = React.useState('All');
  const [selected, setSelected] = React.useState(null);

  const visible =
    category === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === category);

  const toggle = (product) =>
    setSelected((current) => (current?.id === product.id ? null : product));

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>EXPO PRODUCT EXPLORER</Text>
          <Text style={styles.title}>Discover your next favorite.</Text>
          <Text style={styles.subtitle}>
            {PRODUCTS.length} hand-picked gadgets, built with Expo and React Native.
          </Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>
          {CATEGORIES.map((c) => {
            const active = c === category;
            return (
              <Pressable
                key={c}
                onPress={() => setCategory(c)}
                style={[styles.chip, active && styles.chipActive]}
              >
                <Text style={[styles.chipText, active && styles.chipTextActive]}>{c}</Text>
              </Pressable>
            );
          })}
        </ScrollView>

        <View style={styles.list}>
          {visible.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              selected={selected?.id === product.id}
              onExplore={toggle}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        {selected ? (
          <>
            <Text style={styles.footerText} numberOfLines={1}>
              Viewing <Text style={styles.footerStrong}>{selected.name}</Text>
            </Text>
            <Text style={styles.footerPrice}>${selected.price}</Text>
          </>
        ) : (
          <Text style={styles.footerMuted}>Tap “Explore product” to take a closer look.</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  content: {
    alignSelf: 'center',
    gap: 20,
    maxWidth: 640,
    paddingBottom: 32,
    paddingHorizontal: 20,
    paddingTop: 64,
    width: '100%',
  },
  header: {
    gap: 8,
  },
  eyebrow: {
    color: '#22d3ee',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  title: {
    color: '#f8fafc',
    fontSize: 32,
    fontWeight: '800',
  },
  subtitle: {
    color: '#94a3b8',
    fontSize: 15,
    lineHeight: 22,
  },
  chips: {
    gap: 8,
  },
  chip: {
    backgroundColor: '#1e293b',
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  chipActive: {
    backgroundColor: '#22d3ee',
  },
  chipText: {
    color: '#cbd5e1',
    fontSize: 14,
    fontWeight: '600',
  },
  chipTextActive: {
    color: '#083344',
  },
  list: {
    gap: 16,
  },
  footer: {
    alignItems: 'center',
    backgroundColor: '#020617',
    borderTopColor: '#1e293b',
    borderTopWidth: 1,
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  footerText: {
    color: '#cbd5e1',
    flex: 1,
    fontSize: 15,
  },
  footerStrong: {
    color: '#f8fafc',
    fontWeight: '700',
  },
  footerPrice: {
    color: '#a5f3fc',
    fontSize: 18,
    fontWeight: '800',
  },
  footerMuted: {
    color: '#64748b',
    fontSize: 14,
  },
});
